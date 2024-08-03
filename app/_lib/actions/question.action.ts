"use server";

import { MutateQuestionSchema, MutateQuestionSchemaType } from "@/app/_schemas";
import { db } from "@/app/_utils/db/config/db.config";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

type GetQuestionsType = {
  searchQuery?: string;
  filter?: string;
};
export async function getQuestions(params: GetQuestionsType) {
  const { searchQuery, filter } = params;
  const questions = await db.question.findMany({
    where: {
          title: {
            contains: searchQuery,
            mode: "insensitive",
          },
    },
    select: {
      id: true,
      title: true,
      content: true,
      anonymous: true,
      viewCount: true,
      answers: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
          upvotes: {
            select: {
              id: true,
              answerId: true,
              userId: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
      createdAt: true,
      updatedAt: true, // Include updatedAt for QuestionType
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
      tags: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return { success: true, data: questions };
}

// create a new question
export async function mutateQuestion(data: MutateQuestionSchemaType, questionA?: any) {
  const session = await auth();
  const validateFeilds = MutateQuestionSchema.safeParse(data);

  if (session?.user) {
    if (validateFeilds.success) {
      const { title, content, anonymous, tags } = validateFeilds.data;
      const dataToSend = {
        title,
        content,
        anonymous,
        userId: session?.user.id!,
      };

      if (questionA) {
        await db.question.update({
          where: {
            id: questionA.id
          },
          data: dataToSend
        })
        revalidatePath("/all-questions", "page");
        return {success: "true"}
      } else {
      const question = await db.question.create({
        data: dataToSend,
      });
      const areTagsAvailable = [];
      for (const tag of tags) {
        const tagExist = await db.tag.findFirst({
          where: {
            name: tag,
          },
        });
        if (tagExist) {
          areTagsAvailable.push(tagExist);
        } else {
          const newTag = await db.tag.create({
            data: {
              name: tag,
            },
          });
          areTagsAvailable.push(newTag);
        }
      }
      await db.question.update({
        where: {
          id: question.id,
        },
        data: {
          tags: {
            connect: areTagsAvailable.map((tag) => ({ id: tag.id })),
          },
        },
      });

      revalidatePath("/all-questions", "page");

      return { success: true, data: question };
    }
    }
    return { success: false, error: validateFeilds.error };
  }
  return { success: false, error: "يجب تسجيل الدخول أولا" };
}

export async function getQuestionById(id: string) {
  const question = await db.question.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      anonymous: true,
      viewCount: true,
      answers: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
          upvotes: true,
        },
        //reverse the order of answers
        orderBy: {
          createdAt: "desc",
        },
      },
      createdAt: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });

  return { success: true, data: question };
}

export async function handleQuestionView(id: string) {
  const session = await auth();
  const question = await db.question.findUnique({
    where: {
      id,
    },
    select: {
      viewCount: true,
    },
  });

  if (question) {
    if (session?.user) {
      // Check if the user has already viewed the question
      const existingView = await db.view.findFirst({
        where: {
          questionId: id,
          userId: session.user.id!,
        },
      });

      if (!existingView) {
        await db.view.create({
          data: {
            questionId: id,
            userId: session.user.id!,
          },
        });
        await db.question.update({
          where: {
            id,
          },
          data: {
            viewCount: question.viewCount + 1,
          },
        });

        return { success: true };
      }

      // If the view already exists, return the question without updating the view count
      return { success: true, data: question };
    }
  }

  return { success: false, error: "السؤال غير موجود" };
}

export async function deleteQuestion(id: string) {
  const session = await auth();
  if (session?.user) {
    const question = await db.question.findFirst({
      where: {
        id,
        userId: session.user.id,
      },
    });
    if (!question) {
      return { success: false, error: "السؤال غير موجود" };
    }
    await db.question.delete({
      where: {
        id,
      },
    });

    revalidatePath("/all-questions", "page");

    return { success: true };
  }
  return { success: false, error: "يجب تسجيل الدخول أولا" };
}

//questions asked by me
export async function getMyQuestions() {
  const session = await auth();
  if (session?.user) {
    const questions = await db.question.findMany({
      where: {
        userId: session.user.id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        anonymous: true,
        viewCount: true,
        answers: {
          select: {
            id: true,
            content: true,
            createdAt: true,
            updatedAt: true,
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
            upvotes: {
              select: {
                id: true,
                answerId: true,
                userId: true,
                createdAt: true,
                updatedAt: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        createdAt: true,
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    return { success: true, data: questions };
  }
  return { success: false, error: "يجب تسجيل الدخول أولا" };
}

// get top viewd questions
export async function getTopQuestions() {
  const questions = await db.question.findMany({
    orderBy: {
      viewCount: "desc",
    },
    take: 5,
    select: {
      id: true,
      title: true,
      content: true,
      anonymous: true,
      views: {
        select: {
          id: true,
          questionId: true,
          userId: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      answers: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
          upvotes: {
            select: {
              id: true,
              answerId: true,
              userId: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
      createdAt: true,
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  }); 

  return { success: true, data: questions };
}
