import QuestionCard from "@/app/_components/community/all-questions/question-card";
import { buttonVariants } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import Typography from "@/app/_components/ui/typography";
import { getQuestions } from "@/app/_lib/actions/questions.action";
import { ny } from "@/app/_lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";

const CommunityHomePage = async () => {
  const { data: questions } = await getQuestions();


  return (
    <div className="grid gap-5 w-full">
      <div className="flex items-center justify-between w-full">
        <Typography element="h3" as="h3" color="secondary">
          جميع الأسئلة
        </Typography>
        <Link
          href="/community/ask"
          className={ny(buttonVariants({ size: "sm" }))}
        >
          إضافة سؤال
        </Link>
      </div>
      <Input
        placeholder="البحث عن سؤال...."
        icon={<Search />}
        iconPosition={"right"}
      />
      <div className="flex flex-col gap-4">
        {!questions ? (
          <Typography element="p" as="p" color="muted">
            لا يوجد أسئلة
          </Typography>
        ) : (
          questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))
        )}
      </div>
    </div>
  );
};

export default CommunityHomePage;
