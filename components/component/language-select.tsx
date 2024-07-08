"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Typography from "../ui/typography";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSelectForm() {
  const [selectedOption, setSelectedOption] = useState({
    value: "en",
    label: "English",
  });
  const router = useRouter();

  // const t = useTranslations();
  const changeLanguage = (data: any) => {
    setSelectedOption(data);
    router.push(`/${selectedOption.value}`);
  };
  return (
    <Select
      onValueChange={(e) => {
        changeLanguage(e);
      }}
      defaultValue={"en"}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <Typography element="p" as="extraSmallText">
            {/* {t("English")} */}
            English
          </Typography>
        </SelectItem>
        <SelectItem value="ar">
          <Typography element="p" as="extraSmallText">
            {/* {t("Arabic")} */}
            Arabic
          </Typography>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
