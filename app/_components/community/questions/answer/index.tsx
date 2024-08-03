"use client"

import Date from "@/app/_components/component/date";
import { Button } from "@/app/_components/ui/button";
import Typography from "@/app/_components/ui/typography";
import { UserAvatar } from "@/app/_components/ui/user-avatar";
import { upvoteAnswer } from "@/app/_lib/actions/answer.action";
import { ArrowBigUp } from "lucide-react";
import { toast } from "sonner";

const AnswerComponent = ({ answer, hasUserVoted }: {
  answer: AnswerType;
  hasUserVoted: boolean;
}) => {
  const handleUpvoteAnswer = async () => {
    try {
     const response = await upvoteAnswer(answer.id);
      if (response.success) {
        if (response.type === "upVoted") {
          toast("تم التصويت بنجاح");
        } else {
          toast("تم إلغاء التصويت بنجاح");
        }
      } else {
        toast("حدث خطأ أثناء التصويت");
      }
        
    } catch (error) {
      toast("حدث خطأ أثناء التصويت");
    }
  }
  return (
    <li className=" [&:first-child]:pt-0 pt-5 flex items-start gap-2">
      <form className="flex items-center gap-2" onSubmit={
        (e) => {
          e.preventDefault();
          handleUpvoteAnswer();
        }
      }>
        <Typography element="p" as="p" color="secondary" className="">
          {answer.upvotes.length}
        </Typography>
        <Button type="submit" variant={"ghost"} size={"icon"}>
        <ArrowBigUp
          size={30}
          strokeWidth={1}
          fill={hasUserVoted ? "#e4b91b" : "#1f1f1f"}
          className="text-primary-foreground cursor-pointer"
          />
          </Button>
      </form>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <UserAvatar
            name={answer.user.name!}
            image={answer.user.image || ""}
            avatarClassName="bg-smoked size-6"
          />
          <span>・</span>
          <Typography
            element="p"
            as="extraSmallText"
            color="muted"
          >
            <Date dateString={answer?.createdAt.toString()!} />
          </Typography>
        </div>

          <div dangerouslySetInnerHTML={{ __html: answer.content }} />
      </div>
    
    </li>
  );
};

export default AnswerComponent;
