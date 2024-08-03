
"use client";

import { Button } from "@/app/_components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { EditorComponent } from "@/app/_components/editor";
import { createAnswer } from "@/app/_lib/actions/answer.action";
import { toast } from "sonner";

const AnswerFormSchema = z.object({
  content: z.string().min(1, "عليك ادخال النص!"),
});

type AnswerFormSchemaType = z.infer<typeof AnswerFormSchema>;

  const AnswerForm = ({
  questionId,
  answer,
  setIsEditingAnswer,
}: {
  questionId: string;
  answer?: AnswerType;
  setIsEditingAnswer?: (value: boolean) => void;}) => {

    const [isWritingANewAnswer, setIsWritingANewAnswer] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
 const answerForm = useForm<AnswerFormSchemaType>({
   resolver: zodResolver(AnswerFormSchema),
   defaultValues: {
     content: answer?.content || "",
   },
 });
  

    
    const onSubmit = async (data: AnswerFormSchemaType) => {
      try {
        if (answer) {
          // TODO: update answer
        } else {
          const response = await createAnswer(data, questionId);
          if (response.success) {
            toast("تمت الاضافة بنجاح")
            answerForm.reset()
          }
        }
      } catch (error: any) {
        console.log(error);
      } finally {
        setIsEditingAnswer?.(false);
        setIsWritingANewAnswer(false);
      }
    };

     const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      setIsEditingAnswer?.(false);
      setIsWritingANewAnswer(false);
    }
  };

    useEffect(() => {
      if (isWritingANewAnswer || answer) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isWritingANewAnswer, answer]);

    const isLoading = answerForm.formState.isSubmitting;
    
     const submitButton = answer ? (
       <div className="flex gap-2 items-center">
         <Button
           type="submit"
           size="sm"
           className="my-4"
           loading={isLoading}
           disabled={isLoading}
         >
           Update Comment
         </Button>
         <Button
           size="sm"
           variant="secondary"
           className="my-4"
           disabled={isLoading}
           onClick={() => setIsEditingAnswer?.(false)}
         >
           Cancel
         </Button>
       </div>
     ) : (
       <div className="flex gap-2 items-center">
         <Button
           type="submit"
           size="sm"
           loading={isLoading}
           disabled={isLoading}
                 >
                     إضافة
         </Button>
         <Button
           size="sm"
           variant="secondary"
           disabled={isLoading}
           onClick={() => setIsWritingANewAnswer(false)}
         >
           إلغاء
         </Button>
       </div>
     );


return (
  <Form {...answerForm}>
    <form
      ref={formRef}
      onSubmit={answerForm.handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full items-start"
    >
      <div className="grid gap-2 w-full">
        {answer || isWritingANewAnswer ? (
          <FormField
            control={answerForm.control}
            name="content"
            render={({ field }) => (
              <FormItem>
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
        ) : (
          <Input
            placeholder="إضافة جواب...."
            onFocus={() => setIsWritingANewAnswer(true)}
          />
        )}
      </div>
      {(isWritingANewAnswer || answer) && submitButton}
    </form>
  </Form>
);};

export default AnswerForm