"use client";

import React, { useState } from 'react'
import Date from "@/app/_components/component/date";
import Typography from "@/app/_components/ui/typography";
import { UserAvatar } from "@/app/_components/ui/user-avatar";
import { ArrowBigUp } from 'lucide-react';

const AnswerComponent = ({ answer }: {
    answer: AnswerType;
}) => {
  const [fill, setFill] = useState(false)
  return (
    <li className=" [&:first-child]:pt-0 pt-5 flex items-center justify-between">
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
            className="text-primary-foreground"
          >
            <Date dateString={answer?.createdAt.toString()!} />
          </Typography>
        </div>

        <Typography element="p" as="p" color="muted">
          <div dangerouslySetInnerHTML={{ __html: answer.content }} />
        </Typography>
      </div>
      <div className="flex items-center">
        <ArrowBigUp
          size={50}
          strokeWidth={1}
          fill={fill ? "#e4b91b" : "#1f1f1f"}
          className="text-primary-foreground cursor-pointer"
          onClick={() => setFill((f) => !f)}
        />
        <Typography
          element="h4"
          as="h4"
          color="secondary"
          className="font-sans"
        >
          {answer.upvotes.length}
        </Typography>
      </div>
    </li>
  );
}

export default AnswerComponent