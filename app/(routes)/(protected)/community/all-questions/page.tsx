import RenderQuestions from "@/app/_components/community/questions/render-questions";
import { getQuestions } from "@/app/_lib/actions/question.action";

const CommunityHomePage = async ({ searchParams }: SearchParamsProps) => {
  const { data: questions } = await getQuestions({
    searchQuery: searchParams?.q,
      filter: searchParams?.filter
    });

  return <RenderQuestions questions={questions} title="جميع الاسئلة" />;
};

export default CommunityHomePage;
