import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScanSearch } from "lucide-react";
import Typography from "../ui/typography";
import MultiSelect from "../ui/multi-select";

const AdvancedSearchDialogDrawer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent withoutClose>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            البحث المتقدم
            <ScanSearch />
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <Typography element="p" as="p" className="flex-1">
              السنة
            </Typography>
            <Select>
              <SelectTrigger className="max-w-32">
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
              <SelectTrigger className="max-w-32">
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
          <div className="flex items-center gap-2">
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
      </DialogContent>
    </Dialog>
  );
};

export default AdvancedSearchDialogDrawer;
