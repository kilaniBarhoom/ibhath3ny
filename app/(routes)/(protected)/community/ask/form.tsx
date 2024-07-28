"use client";

import { createQuestion } from "@/app/_lib/actions/questions.action";
import { CreateQuestionSchema, CreateQuestionSchemaType } from "@/app/_schemas";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Button } from "@/app/_components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { EditorComponent } from "@/app/_components/editor";
import { Input } from "@/app/_components/ui/input";
import { Checkbox } from "@/app/_components/ui/checkbox";

const CreateQuestionForm = () => {
  const createQuestionForm = useForm<CreateQuestionSchemaType>({
    resolver: zodResolver(CreateQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      anonymous: false,
    },
  });

  const loadingToCreateQuestion = createQuestionForm.formState.isSubmitting;

  const onSubmit = async (values: CreateQuestionSchemaType) => {
    try {
      const response = await createQuestion(values);
      
      if (response && response.success) {
        toast("تم إضافة السؤال بنجاح");

        router.push("/community/all-questions")
        createQuestionForm.reset();
      } else {
        if (response?.error) console.log(response);
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  const router = useRouter();

  return (
    <Form {...createQuestionForm}>
      <form
        onSubmit={createQuestionForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={createQuestionForm.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-start w-full">
              <FormLabel className="text-lg">العنوان</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={createQuestionForm.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-start w-full">
              <FormLabel className="text-lg">السؤال</FormLabel>
              <FormControl>
                <EditorComponent
                  content={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={createQuestionForm.control}
          name="anonymous"
          render={({ field }) => (
            <FormItem className="flex flex-row gap-2 items-center justify-start w-full">
              <FormLabel className="text-lg">
                مجهول الهوية
              </FormLabel>
              <FormControl className="">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-2 w-full md:justify-start">
          <Button
            className="md:w-fit w-full"
            size={"md"}
            loading={loadingToCreateQuestion}
            disabled={loadingToCreateQuestion}
            type="submit"
          >
            إضافة
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateQuestionForm;
