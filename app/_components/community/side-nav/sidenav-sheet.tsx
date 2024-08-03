import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../ui/button";

const SideNavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="w-fit h-fit">
        <Button size="sm" className="lg:hidden w-fit h-fit absolute top-0 right-0">
          <ArrowLeft size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SideNavSheet