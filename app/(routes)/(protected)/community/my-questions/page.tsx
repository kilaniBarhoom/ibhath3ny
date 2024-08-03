import RenderQuestions from "@/app/_components/community/questions/render-questions";
import { getMyQuestions } from "@/app/_lib/actions/question.action";

const MyQuestionsPage = async () => {
  const { data: questions } = await getMyQuestions();
  return <RenderQuestions questions={questions} title="أسئلتي" />;
};

export default MyQuestionsPage;
