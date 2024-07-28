"use server";

import { CreateQuestionSchema, CreateQuestionSchemaType } from "@/app/_schemas";
import { db } from "@/app/_utils/db/config/db.config";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";


export async function getQuestions() {
  const questions = await db.question.findMany({
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
      updatedAt: true, // Include updatedAt for QuestionType
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


// create a new question
export async function createQuestion(data: CreateQuestionSchemaType) {
  const session = await auth();
  const validateFeilds = CreateQuestionSchema.safeParse(data);

  if (session?.user) {
    if (validateFeilds.success) {
      const dataToSend = {
        ...data,
        userId: session?.user.id!,
      };

      const question = await db.question.create({
        data: dataToSend
      });
            revalidatePath("/all-questions", "page");


      return { success: true, data: question };
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
      views: true,
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
      id: true,
      views: true,
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
        // Create a new view record
        await db.view.create({
          data: {
            questionId: id,
            userId: session.user.id!,
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
