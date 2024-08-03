import LocalSearchBar from "@/app/_components/community/questions/search/local-search";
import TagCard from "@/app/_components/community/tags/tag-card";
import { Input } from "@/app/_components/ui/input";
import Typography from "@/app/_components/ui/typography";
import { getTags } from "@/app/_lib/actions/tag.action";
import { Search } from "lucide-react";

const TagsPgae = async () => {
  const { data: tags } = await getTags();
  return (
    <div className="grid gap-5 w-full">
      <div className="text-start w-full">
        <Typography element="h3" as="h3" color="secondary">
          جميع التاغات{" "}
        </Typography>
      </div>
      <LocalSearchBar route="/community/tags" placeholder="البحث عن تاغ...." /> 
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {!tags ? (
          <Typography element="p" as="p" color="muted">
            لا يوجد تاغات
          </Typography>
        ) : (
          tags.map((tag: any) => <TagCard key={tag.id} tag={tag} />)
        )}
      </div>
    </div>
  );
};

export default TagsPgae;
