import AdvancedSearchDialogDrawer from "../search/advanced-search-dialog-drawer";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import Typography from "../ui/typography";

const DescriptionPrompt = () => {
  return (
    <form className="grid gap-4 w-full" action="">
      <Typography element="p" as={"p"}></Typography>
      <Textarea
        className="min-h-60 resize-none text-xl bg-background/80 "
        placeholder="اوصف ما تبحث عنه, اسم البرنامج, الشخصيات, وصف للاحداث, او اي شيئ..."
      />
      <div className="flex items-center gap-2">
        <Button type="submit" size="md" className="w-fit text-black">
          ابحث
        </Button>
        <AdvancedSearchDialogDrawer>
          <Button size="sm" className="w-fit" variant={"link"}>
            بحث متقدم
          </Button>
        </AdvancedSearchDialogDrawer>
      </div>
    </form>
  );
};

export default DescriptionPrompt;
