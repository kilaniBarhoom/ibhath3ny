import React from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Typography from "../ui/typography";

const DescriptionPrompt = () => {
  return (
    <div className="flex justify-center items-center w-full max-w-screen-lg mx-auto">
      <form className="grid gap-4 w-full" action="">
        <Typography element="p" as={"p"}></Typography>
        <Textarea
          className="min-h-60 resize-none text-xl bg-background/80"
          placeholder="اوصف ما تبحث عنه, اسم البرنامج, الشخصيات, وصف للاحداث, او اي شيئ..."
        />
        <Button type="submit" size="md" className="w-fit text-black">
          ابحث
        </Button>
      </form>
    </div>
  );
};

export default DescriptionPrompt;
