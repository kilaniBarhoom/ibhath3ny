import QuestionCard from "@/components/community/all-questions/question-card";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Typography from "@/components/ui/typography";
import { ny } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";

const CommunityHomePage = () => {
  return (
    <div className="grid gap-5 w-full">
      <div className="flex items-center justify-between w-full">
        <Typography element="h3" as="h3" color="secondary">
          جميع الأسئلة
        </Typography>
        <Link
          href="/community/ask"
          className={ny(buttonVariants({ size: "sm" }))}
        >
          إضافة سؤال
        </Link>
      </div>
      <Input
        placeholder="البحث عن سؤال...."
        icon={<Search />}
        iconPosition={"right"}
      />
      <div className="flex flex-col gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <QuestionCard
            key={index}
            question={{
              id: `${index}`,
              content: "This is the first question submitted by the user",
              tags: ["tag1", "tag2"],
              user: {
                name: "kilani",
                avatar: "https://randomuser.me/api/portraits",
              },
              comments: [
                {
                  id: "1",
                  content: "This is the first comment",
                  user: {
                    name: "kilani",
                    avatar: "https://randomuser.me/api/portraits",
                  },
                  createdAt: "2021-09-09",
                },
              ],
              views: 20,
              createdAt: "2021-09-09",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityHomePage;
