import { auth } from "@/auth";
import AnswerForm from "./form";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";


const PostAnswer = async ({ questionId }: {
  questionId: string;
}) => {
    const session = await auth();
    const user = session?.user;
   
  return (
    <div className="flex gap-2 mb-3">
      <Avatar>
        <AvatarImage src={user?.image || ""} alt={""} />
        <AvatarFallback className="xl">
          {user?.name?.split("")[0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <AnswerForm questionId={questionId} />
    </div>
  );
}

export default PostAnswer