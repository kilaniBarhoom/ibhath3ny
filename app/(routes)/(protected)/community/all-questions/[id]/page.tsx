import AnswerComponent from "@/app/_components/community/questions/answer";
import PostAnswer from "@/app/_components/community/questions/answer/post-answer";
import Date from "@/app/_components/component/date";
import { DeleteConfirmDialog } from "@/app/_components/community/questions/delete-confirm-dialog";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import Typography from "@/app/_components/ui/typography";
import { UserAvatar } from "@/app/_components/ui/user-avatar";
import {  getQuestionById } from "@/app/_lib/actions/question.action";
import { ny } from "@/app/_lib/utils";
import { auth } from "@/auth";
import { Clock, Eye, MessageCircle } from "lucide-react";
import Link from "next/link";

const QuestionViewPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const { data: question } = await getQuestionById(id);


  const session = await auth();
  const user = session?.user;

  const hasUserVoted = (answer: AnswerType) => {
    return !!answer.upvotes.find((upvote) => upvote.userId === user?.id);
  };

 

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1">
          {user?.id === question?.user?.id ? (
            <UserAvatar
              name={"أنت"}
              image={user?.image || ""}
              avatarClassName="bg-smoked"
            />
          ) : (
            <UserAvatar
              name={question?.anonymous ? "مجهول" : question?.user.name!}
              image={question?.anonymous ? "" : question?.user.image || ""}
              avatarClassName="bg-smoked"
            />
          )}
          {question?.user.id === user?.id && (
            <>
              <span>・</span>
              <Link
                href={`/community/all-questions/edit/${id}`}
                className={ny(
                  buttonVariants({
                    variant: "link",
                    size: "sm",
                  }),
                  "px-0"
                )}
              >
                تعديل
              </Link>
              <span>・</span>
              <DeleteConfirmDialog
                alertTitle="حذف السؤال"
                alertDescription="هل انت متأكد انك تريد حذف السؤال ؟"
                id={id}
              >
                <Button
                  variant={"link"}
                  size={"sm"}
                  className="px-0 text-red-400 hover:text-red-500"
                >
                  حذف
                </Button>
              </DeleteConfirmDialog>
            </>
          )}
        </div>
        <Typography element="h3" as="h3" color="secondary">
          {question?.title}
        </Typography>
        <div className="flex items-center gap-5">
          <Typography
            element="p"
            as="smallText"
            color="secondary"
            className="font-normal p-0 m-0 h-fit flex items-center gap-1"
          >
            <Eye size={18} className="text-primary-foreground" />
            {question?.viewCount}
            {/* <p>مشاهدة</p> */}
          </Typography>
          <Typography
            element="p"
            as="smallText"
            color="secondary"
            className="font-normal p-0 m-0 h-fit flex items-center gap-1"
          >
            <MessageCircle size={18} className="text-primary-foreground" />
            {question?.answers.length}
            {/* <p>رد</p> */}
          </Typography>
          <Typography
            element="p"
            as="smallText"
            color="secondary"
            className="font-normal p-0 m-0 h-fit flex items-center gap-1"
          >
            <Clock size={18} className="text-primary-foreground" />
            <Date dateString={question?.createdAt.toString()!} />
          </Typography>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: question?.content ?? "" }} />
      <div id="answers" className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Typography element="p" as="p">
              {question?.answers.length}
            </Typography>
            <p className="text-foreground">
              {question?.answers.length === 1 ? "إجابة" : "إجابات"}
            </p>
          </div>
        </div>
        <PostAnswer questionId={id} />
        <ul className="list-none mr-5 divide-y space-y-5">
          {question?.answers.length ? (
            question?.answers.map((answer) => (
              <AnswerComponent
                key={answer.id}
                answer={answer}
                hasUserVoted={hasUserVoted(answer)}
              />
            ))
          ) : (
            <div className="min-h-20 flex items-center justify-center">
              <Typography element="p" as="lead" color="muted">
                لا توجد إجابات
              </Typography>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default QuestionViewPage;
