import Typography from "@/components/ui/typography";
import { UserAvatar } from "@/components/ui/user-avatar";
import { QuestionType } from "@/types";
import React from "react";

type Props = {
  question: QuestionType;
};

const QuestionCard = (props: Props) => {
  return (
    <div className="bg-muted p-6 flex flex-col justify-between gap-3 rounded-md scale-100 hover:scale-y-110 active:scale-y-95 cursor-pointer transition-all ease-in-out duration-200">
      <Typography element="h5" as="h5" color="secondary">
        {props.question.content}
      </Typography>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UserAvatar
            name={props.question.user.name}
            image={props.question.user.avatar}
            avatarClassName="bg-smoked"
          />
          <span>・</span>
          <Typography element="p" as={"extraSmallText"} color="muted">
            منذ ساعة واحدة
          </Typography>
        </div>
        <p>{props.question.views}</p>
      </div>
    </div>
  );
};

export default QuestionCard;
