"use client";

import { Button } from "@/app/_components/ui/button";
import { Checkbox } from "@/app/_components/ui/checkbox";
import MultiSelect from "@/app/_components/ui/multi-select";
import { Separator } from "@/app/_components/ui/separator";
import { Textarea } from "@/app/_components/ui/textarea";
import Typography from "@/app/_components/ui/typography";
import { useRouter } from "next/navigation";
import CreateQuestionForm from "./form";

type Props = {};

const AskPage = (props: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-10">
      <Typography element="h3" as="h3" color="secondary">
        اطرح سؤالك
      </Typography>
      {/* <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start gap-2">
          <Typography
            element="p"
            as="p"
            className="flex-[0.7]"
            color="secondary"
          >
            السؤال
          </Typography>
          <Textarea placeholder="اكتب ما في بالك...." className="min-h-40" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Typography element="p" as="p" color="secondary">
            النوع
          </Typography>
          <MultiSelect
            className="w-full"
            items={[
              { label: "مسلسل", value: "مسلسل" },
              { label: "فيلم", value: "فيلم" },
              { label: "برنامج", value: "برنامج" },
              { label: "مسرحية", value: "مسرحية" },
              { label: "كرتون", value: "كرتون" },
              { label: "برومو", value: "برومو" },
            ]}
          />
        </div>
        <Separator />
        <div className="flex flex-col items-start gap-2">
          <Typography element="p" as="p" color="secondary">
            إخفاء الهوية
          </Typography>
          <div className="flex items-center gap-2">
            <Checkbox />
            <Typography element="p" as={"smallText"} color="muted">
              * بتحديد هذا الخيار سيتم إخفاء اسمك وصورتك عن السؤال
            </Typography>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-2 w-full items-center md:justify-start">
          <Button className="md:w-fit w-full" size={"md"}>
            إضافة
          </Button>
          <Button
            variant="outline"
            className="md:w-fit w-full"
            size={"md"}
            onClick={() => router.back()}
          >
            إلغاء
          </Button>
        </div>
      </div> */}
      <CreateQuestionForm />
    </div>
  );
};

export default AskPage;
