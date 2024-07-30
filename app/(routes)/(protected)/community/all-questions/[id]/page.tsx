import PostAnswer from "@/app/_components/community/question/answer/post-answer";
import Date from "@/app/_components/component/date";
import Typography from "@/app/_components/ui/typography";
import { UserAvatar } from "@/app/_components/ui/user-avatar";
import { getQuestionById } from "@/app/_lib/actions/questions.action";
import { Clock, Eye, MessageCircle } from "lucide-react";
import AnswerComponent from "../../../../../_components/community/question/answer";


const QuestionViewPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const { data: question } = await getQuestionById(id);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <UserAvatar
          name={question?.user.name!}
          image={question?.user.image || ""}
          avatarClassName="bg-smoked"
        />
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
            {question?.views.length}
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
      <Typography element="p" as="p" color="muted">
        <div dangerouslySetInnerHTML={{ __html: question?.content ?? "" }} />
      </Typography>
      <div id="answers" className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
          <Typography element="p" as="p">
            {question?.answers.length}
          </Typography>
            <p className="text-foreground">{question?.answers.length === 1 ? "إجابة" : "إجابات"}</p>

          </div>
        </div>
        <PostAnswer questionId={id} />
        <ul className="list-none mr-5 divide-y space-y-5">
          {question?.answers.length ? (
            question?.answers.map((answer) => (
              <AnswerComponent key={answer.id} answer={answer} />
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
