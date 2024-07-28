import * as z from "zod";

export const CreateQuestionSchema = z.object({
  title: z.string().min(1, "العنوان لا يجب أن يكون فارغًا"),
  content: z.string().min(1, "السؤال لا يجب أن يكون فارغًا"),
  anonymous: z.boolean().optional(),
});

export type CreateQuestionSchemaType = z.infer<typeof CreateQuestionSchema>;


export const createAnswerSchema = z.object({
  content: z.string().min(1, "الرد لا يجب أن يكون فارغًا"),
});

export type CreateAnswerSchemaType = z.infer<typeof createAnswerSchema>;