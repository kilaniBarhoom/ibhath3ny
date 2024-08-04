import { Badge } from "@/app/_components/ui/badge"
import { buttonVariants } from "@/app/_components/ui/button"
import { Separator } from "@/app/_components/ui/separator"
import Typography from "@/app/_components/ui/typography"
import { getTopQuestions } from "@/app/_lib/actions/question.action"
import { getTopTags } from "@/app/_lib/actions/tag.action"
import { ny } from "@/app/_lib/utils"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const OtherNav = async () => {
    const {data: questions} = await getTopQuestions()
    const {data: tags} = await getTopTags()
  return (
    <nav className="flex flex-col gap-5 py-4 w-full h-full">
      <div className="px-4 flex flex-col gap-5">
        <Typography element="p" as="largeText">
          الأسئلة المشهورة
        </Typography>
        <ul className="flex flex-col gap-4">
          {questions.map((question) => (
            <li key={question?.title}>
              <Link
                href={`/community/all-questions/${question.id}`}
                className={ny(
                  buttonVariants({ variant: "link" }),
                  "flex justify-between items-center truncate antialiased px-0"
                )}
              >
                {question.title}
                <ChevronLeft size={18} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="px-4 flex flex-col gap-5">
        <Typography element="p" as="largeText">
          التاغات المشهورة
        </Typography>
        <ul className="flex flex-col gap-4">
          {tags.map((tag) => (
            <li key={tag?.name} className="flex justify-between items-center">
                <Link
                  href={`/community/tags/${tag.id}`}
                  className={ny(
                    buttonVariants({ variant: "tag", size: "sm" }),
                    "truncate antialiased"
                  )}
                >
                  {tag.name}
                </Link>
                  {tag.questions.length}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default OtherNav