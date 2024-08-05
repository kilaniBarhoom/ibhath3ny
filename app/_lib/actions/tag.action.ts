"use server";

import { db } from "@/app/_utils/db/config/db.config";

export async function getTags() {
  const tags = await db.tag.findMany({
    select: {
      id: true,
      name: true,
      questions: true,
    },
  });

  return { success: true, data: tags };
}

export async function getQuestionsByTagId(tagId: string) {
  const tag = await db.tag.findFirst({
    where: {
      id: tagId,
    },
    select: {
      id: true,
      name: true,
      questions: {
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
      },
    },
  });

  if (!tag) {
    return { success: false, error: "التاغ غير موجود" };
  }
  const questions = tag.questions;

  return { success: true, tagname: tag?.name, questions: questions };
}

// get top tags depending on how many questions are tagged with it
export async function getTopTags() {
  const tags = await db.tag.findMany({
    orderBy: {
      questions: {
        _count: "desc",
      },
    },
    take: 5,
    select: {
      id: true,
      name: true,
      questions: {
        select: {
          id: true,
        },
      },
    },
  });

  return { success: true, data: tags };
}
