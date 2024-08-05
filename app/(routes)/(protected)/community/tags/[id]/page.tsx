import RenderQuestions from "@/app/_components/community/questions/render-questions";
import { getQuestionsByTagId } from "@/app/_lib/actions/tag.action";

const QuestionsTagPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const { tagname, questions } = await getQuestionsByTagId(id);
  return (
    <div>
      <RenderQuestions
        questions={questions}
        title={`أسئلة تابعة للتاغ: ${tagname}`}
      />
    </div>
  );
};

export default QuestionsTagPage;
