import React from 'react'
import { buttonVariants } from "@/app/_components/ui/button";
import Typography from "@/app/_components/ui/typography";
import { ny } from "@/app/_lib/utils";
import Link from "next/link";
import QuestionCard from './question-card';
import LocalSearchBar from './search/local-search';
import Image from 'next/image';
import NoQuestions from '@/public/images/no_questions.svg';
import { auth } from '@/auth';

type Props = {
    title: string;
  questions: any;
  children?: React.ReactNode;
}
const RenderQuestions = async ({ title, questions, children }: Props) => {
  const session = await auth();
  const user = session?.user;
  return (
    <div className="grid gap-5 w-full">
      <div className="flex sm:flex-row flex-col items-center justify-between w-full gap-4">
        <Typography element="h3" as="h3" color="secondary">
          {title}
        </Typography>
        <Link
          href="/community/ask"
          className={ny(buttonVariants({ size: "sm" }), "sm:w-fit w-full")}
        >
          إضافة سؤال
        </Link>
      </div>
      <LocalSearchBar route="/" placeholder="البحث عن سؤال...." />
      {children}
      <div className="flex flex-col gap-4">
        {questions?.length > 0 ? (
          questions.map((question: any) => (
            <QuestionCard key={question.id} question={question} user={user} />
          ))
        ) : (
          <div className="flex flex-col gap-4 items-center justify-center min-h-60 w-full text-center">
            <Image
              src={NoQuestions}
              alt="No Questions"
              className="w-96"
              objectFit="contain"
            />
            <Typography element="p" as="h4" color="secondary">
              لا يوجد أسئلة
            </Typography>
            <Typography
              element="p"
              as="smallText"
              color="muted"
              className="max-w-sm font-bold"
            >
              اكسر الصمت واطرح سؤالك الآن 🚀 اسال سؤالك لبدء النقاش, شارك الان
              💡
            </Typography>
            <Link
              href="/community/ask"
              className={ny(buttonVariants({ size: "sm" }))}
            >
              إضافة سؤال
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default RenderQuestions