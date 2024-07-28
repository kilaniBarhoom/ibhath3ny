"use server";

import { createAnswerSchema, CreateAnswerSchemaType } from "@/app/_schemas";
import { db } from "@/app/_utils/db/config/db.config";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";


export async function createAnswer(data: CreateAnswerSchemaType, questionId: string) {
    const validateFeilds = createAnswerSchema.safeParse(data);
      const session = await auth();

    if (session?.user) {
    if (validateFeilds.success) {
      const dataToSend = {
        ...data,
          userId: session?.user.id!,
            questionId: questionId,
      };

      const answer = await db.answer.create({
        data: dataToSend,
      });
      revalidatePath("/all-questions/[id]", "page");


      return { success: true, data: answer };
    }
    return { success: false, error: validateFeilds.error };
  }
  return { success: false, error: "يجب تسجيل الدخول أولا" };
}
