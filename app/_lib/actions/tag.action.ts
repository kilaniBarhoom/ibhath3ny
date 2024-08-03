"use server";

import { db } from "@/app/_utils/db/config/db.config";


export async function getTags() {
  const tags = await db.tag.findMany({
    select: {
      id: true,
          name: true,
          questions: true
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
          tags: true,
          user: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    }
  })

  if (!tag) {
    return { success: false, error: "التاغ غير موجود" };
  }
  console.log(tag);
  
  const questions = tag.questions;

  return { success: true, tagname: tag?.name, questions:questions };
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