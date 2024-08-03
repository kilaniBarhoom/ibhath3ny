"use client";

import Typography from "@/app/_components/ui/typography";
import { UserAvatar } from "@/app/_components/ui/user-avatar";
import { handleQuestionView } from "@/app/_lib/actions/question.action";
import { ny } from "@/app/_lib/utils";
import { Eye, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Date from "../../component/date";
import { buttonVariants } from "../../ui/button";

type Props = {
  question: any;
};

const QuestionCard = ({ question }: Props) => {
  const router = useRouter();
  const handleViews = async (id: string) => {
    await handleQuestionView(id);
  };

  return (
    <div
      className="bg-background border p-6 py-3 flex flex-col justify-between gap-5 rounded-md scale-100 hover:bg-smoked active:bg-muted cursor-pointer transition-all ease-in-out duration-200"
      onClick={() => {
        handleViews(question.id);
        router.push(`/community/all-questions/${question.id}`);
      }}
    >
      <Typography element="h5" as="h5" color="secondary">
        {question.title}
      </Typography>
      <div className="flex items-center gap-2">
        {question.tags?.length > 0 &&
          question.tags.map((tag: any, index: number) => (
            <Link
              href={`/community/all-questions/${question.id}`}
              key={index}
              className={ny(
                buttonVariants({
                  variant: "tag",
                  size: "xs",
                })
              )}
            >
              {tag.name}
            </Link>
          ))}
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-1">
          <UserAvatar
            name={question.user.name!}
            image={question.user.image || ""}
            avatarClassName="bg-smoked"
          />
          <span>・</span>
          <Typography
            element="p"
            as="extraSmallText"
            color="muted"
            className="font-semibold"
          >
            <Date dateString={question?.createdAt.toString()!} />
          </Typography>
        </div>

        <div className="flex items-center gap-5">
          <Typography
            element="p"
            as="smallText"
            color="secondary"
            className="font-normal p-0 m-0 h-fit flex items-center gap-1"
          >
            <Eye size={18} className="text-primary-foreground" />
            {question?.viewCount}
          </Typography>
          <Typography
            element="p"
            as="smallText"
            color="secondary"
            className="font-normal p-0 m-0 h-fit flex items-center gap-1"
          >
            <MessageCircle size={18} className="text-primary-foreground" />
            {question?.answers.length}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
