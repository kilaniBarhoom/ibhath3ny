import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/_components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { ScanSearch } from "lucide-react";
import { Button } from "../ui/button";
import MultiSelect from "../ui/multi-select";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import Typography from "../ui/typography";

const AdvancedSearchDialogDrawer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const component = (
    <div className="flex flex-col gap-5 justify-start">
      <div className="flex md:flex-row flex-col md:items-center gap-2">
        <Typography element="p" as="p" className="flex-1">
          السنة
        </Typography>
        <Select>
          <SelectTrigger className="md:w-32">
            <SelectValue placeholder="من العام" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2019">2019</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="md:w-32">
            <SelectValue placeholder="الى العام" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2019">2019</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex md:flex-row flex-col md:items-center gap-2">
        <Typography element="p" as="p" className="flex-1">
          نوع ممكن ان يكون
        </Typography>
        <MultiSelect
          className="flex-1 w-full"
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
    </div>
  );
  return (
    <>
      <div className="md:flex hidden">
        <Dialog>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent withoutClose>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                البحث المتقدم
                <ScanSearch />
              </DialogTitle>
            </DialogHeader>
            <div className="p-6 w-full">{component}</div>
            <Separator />
            <DialogClose asChild>
              <div className="flex w-full items-center gap-2 p-6">
                <Button className="w-full">حفظ</Button>
                <Button className="w-full" variant={"outline"}>
                  الغاء
                </Button>
              </div>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:hidden flex">
        <Drawer>
          <DrawerTrigger asChild>{children}</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="flex items-center gap-2">
                البحث المتقدم
                <ScanSearch />
              </DrawerTitle>
            </DrawerHeader>
            <ScrollArea className="overflow-y-auto h-full w-full">
              <div className="p-6 flex flex-col w-full text-right h-full">
                {component}
              </div>
              <Separator />
              <DrawerClose asChild className="p-6">
                <div className="flex w-full items-center gap-2">
                  <Button className="w-full" variant={"outline"}>
                    الغاء
                  </Button>
                  <Button className="w-full">حفظ</Button>
                </div>
              </DrawerClose>
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default AdvancedSearchDialogDrawer;
