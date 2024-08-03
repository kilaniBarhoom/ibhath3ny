"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteQuestion } from "@/app/_lib/actions/question.action";


export function DeleteConfirmDialog({
    alertTitle,
  alertDescription,
    id,
  children,
}: {
    alertTitle: string;
    alertDescription: string;
    id: string;
    children: React.ReactNode;
  }) {
  
  const [open, setOpen] = useState(false)
  const [loadingToDeleteQuestion, setLoadingToDeleteQuestion] = useState(false)
  
  const handleDeleteQuestion = async () => {
    try {
      setLoadingToDeleteQuestion(true);
      const response = await deleteQuestion(id);
      if (response.success) {
        toast("تم حذف السؤال بنجاح");
      } else {
        toast(response?.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingToDeleteQuestion(false);
      setOpen(false);
      router.push("/community/all-questions");
    };
  }
  const router = useRouter();
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
             {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
                  <AlertDialogTitle>{
                    alertTitle
                  }</AlertDialogTitle>
          <AlertDialogDescription>
           {alertDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
                  
                  <AlertDialogAction asChild>
            <Button  loading={loadingToDeleteQuestion} disabled={loadingToDeleteQuestion} onClick={handleDeleteQuestion} variant={"destructive"}>
                            حذف
            </Button>
          </AlertDialogAction>
            <AlertDialogCancel>
                      إلغاء
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
