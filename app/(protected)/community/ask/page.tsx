import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import MultiSelect from "@/components/ui/multi-select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Typography from "@/components/ui/typography";
import React from "react";

type Props = {};

const AskPage = (props: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <Typography element="h3" as="h3" color="secondary">
        اطرح سؤالك
      </Typography>
      <div className="flex flex-col gap-6">
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
        <div className="flex items-center gap-2">
          <Typography element="p" as="p" color="secondary">
            إخفاء الهوية
          </Typography>
          <Checkbox />
          <Typography
            element="p"
            as={"smallText"}
            color="muted"
            className="mr-6"
          >
            * بتحديد هذا الخيار سيتم إخفاء اسمك وصورتك عن السؤال
          </Typography>
        </div>
        <div className="flex gap-2 items-center justify-start">
          <Button size={"md"}>إضافة</Button>
          <Button variant="secondary" size={"md"}>
            إلغاء
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AskPage;
