"use client"
import { useRouter } from "next/navigation";
import Typography from '../../ui/typography';
import { Badge } from "../../ui/badge";

const TagCard = ({tag}: {tag: any}) => {
      const router = useRouter();

  return (
    <div
      className="bg-background border p-6 py-3 flex flex-col justify-between gap-5 rounded-md scale-100 hover:bg-smoked active:bg-muted cursor-pointer transition-all ease-in-out duration-200"
      onClick={() => {
        router.push(`/community/tags/${tag.id}`);
      }}
    >
      <Badge variant={"smoked"} className="w-fit text-md px-4 py-1">
        {tag.name}
          </Badge>
          <Typography element="p" as="smallText" color="primary" className="flex items-center gap-1">
              <span className="text-secondary-foreground">
                  عدد الاسئلة:
                  </span>
              {tag.questions.length} 
        </Typography>
    </div>
  );
}

export default TagCard