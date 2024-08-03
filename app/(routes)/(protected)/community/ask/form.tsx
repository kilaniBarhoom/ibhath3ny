"use client";

import { EditorComponent } from "@/app/_components/editor";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Checkbox } from "@/app/_components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { mutateQuestion } from "@/app/_lib/actions/question.action";
import { MutateQuestionSchema, MutateQuestionSchemaType } from "@/app/_schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const MutateQuestionForm = ({
  user,
  question,
}: {
  user: any;
  question?: any;
}) => {
  const [isSubmittingAI, setIsSubmittingAI] = useState(false);


  
  const groupTags = question?.tags?.length > 0 && question.tags.map((tag: any) => tag.name);
  

  const mutateQuestionForm = useForm<MutateQuestionSchemaType>({
    resolver: zodResolver(MutateQuestionSchema),
    defaultValues: {
      title: question?.title || "",
      content: question?.content || "",
      tags: groupTags || [],
      anonymous: question?.anonymous || false,
    },
  });

  const loadingToMutateQuestion = mutateQuestionForm.formState.isSubmitting;

  const onSubmit = async (values: MutateQuestionSchemaType) => {
    try {
      const response = await mutateQuestion(values, question);

      if (response && response.success) {
        if(response?.data)
          toast("تم إضافة السؤال بنجاح");
        else toast("تم تعديل السؤال بنجاح");

        router.push("/community/all-questions");
        mutateQuestionForm.reset();
      } else {
        if (response?.error) console.log(response);
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  const generateAiAnswer = async () => {
    if (!user) return;
    setIsSubmittingAI(true);
    try {
      const response = await fetch("http://localhost:3000/api/chatgpt", {
        method: "POST",
        body: JSON.stringify({
          question:
            "generate 5 titles (IN ARABIC) for a question about asking for a program name that I used to watch as a kid, and for each one create a content, make it at most 100 characters for the title and 1000 for the content, return the resut ONLY and ONLY in JSON format: [{title1: the title, content: content}, { title2: the title, content: content}, {title3: the title, content: content}, {title4: the title, content: content}, {title5: the title, content: content}]",
        }),
      });

      const aiAnswer = await response.json();

      // convert plaintext to html
      const formatedAnswer = JSON.parse(
        aiAnswer.cleanedString.replace(/\n/g, "")
      );
      const randnum = Math.floor(Math.random() * 5);

      mutateQuestionForm.setValue("title", formatedAnswer[randnum].title);

      mutateQuestionForm.setValue("content", formatedAnswer[randnum].content);
      //  toast notification
      return toast(`${!!formatedAnswer && "Ai answer generated"}`);
    } catch (error: any) {
      return toast(`${error?.message}`);
    } finally {
      setIsSubmittingAI(false);
    }
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
      if (tagValue !== "") {
        // if (tagValue.length > 15) {
        //   return mutateQuestionForm.setError("tags", {
        //     type: "required",
        //     message: "Tag must be less than 15 characters",
        //   });
        // }
        if (!field.value.includes(tagValue as never)) {
          // mutateQuestionForm.setValue("tags", [...field.value, tagValue]);
          field.onChange([...field.value, tagValue]);
          tagInput.value = "";
          // mutateQuestionForm.clearErrors("tags");
        }
      }
    }
  };
  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);
    field.onChange(newTags);
  };

  const router = useRouter();

  return (
    <div className="flex flex-col gap-10">
      <Button
        className="btn light-border-2 gap-1.5 rounded-md px-4 py-2.5 text-primary-500 shadow-none dark:text-primary-500 "
        onClick={() => {
          console.log("Generating");
          generateAiAnswer();
        }}
      >
        {isSubmittingAI ? <>Generating...</> : <>Generate AI answer</>}
      </Button>
      <Form {...mutateQuestionForm}>
        <form
          onSubmit={mutateQuestionForm.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FormField
            control={mutateQuestionForm.control}
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
            control={mutateQuestionForm.control}
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
            control={mutateQuestionForm.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2 justify-start w-full">
                <FormLabel className="text-lg">إضافة تاغات(اختياري)</FormLabel>
                <FormControl>
                  <>
                    <Input
                      placeholder="أضف تاغات"
                      onKeyDown={(e) => handleInputKeyDown(e, field)}
                      disabled={question ? true : false}
                    />
                    {field.value.length > 0 && (
                      <div className="flex-start flex items-center mt-2 gap-2">
                        {field.value.map((tag: any) => {
                          return (
                            <Badge key={tag} variant={"tag"}>
                              {tag}
                              {
                                question ? <></> : (
                              <button
                                className="ml-0 flex items-center gap-2 rounded-md outline-none"
                                    onClick={
                                      question? () => {}: () => handleTagRemove(tag, field)
                                    }
                              >
                                <X className="size-3 text-secondary-foreground/50 mr-1 hover:text-secondary-foreground" />
                              </button>
                                )
                              }
                            </Badge>
                          );
                        })}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={mutateQuestionForm.control}
            name="anonymous"
            render={({ field }) => (
              <FormItem className="flex flex-row gap-2 items-center justify-start w-full">
                <FormLabel className="text-lg">مجهول الهوية</FormLabel>
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
              loading={loadingToMutateQuestion}
              disabled={loadingToMutateQuestion}
              type="submit"
            >
              {question ? "تعديل" : "إضافة"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MutateQuestionForm;
