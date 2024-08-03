
import Typography from "@/app/_components/ui/typography";
import MutateQuestionForm from "./form";
import { auth } from "@/auth";


const AskPage = async () => {

  const session = await auth()

  const user = session?.user;

  return (
    <div className="flex flex-col gap-10">
      <Typography element="h3" as="h3" color="secondary">
        اطرح سؤالك
      </Typography>
      <MutateQuestionForm user={user} />
    </div>
  );
};

export default AskPage;
