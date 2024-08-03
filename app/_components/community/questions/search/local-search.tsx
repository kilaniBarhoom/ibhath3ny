"use client";

import { Input } from "@/app/_components/ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/app/_lib/utils";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CustomeInputProps {
  route: string;
  placeholder: string;
}

const LocalSearchBar = ({
  route,
  placeholder,
}: CustomeInputProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  const [search, setSearch] = useState(query || "");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "q",
          value: search,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ["q"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    

    return () => clearTimeout(delayDebounceFn);
  }, [query, search, route, router, pathname, searchParams]);

  return (
      <Input
        icon={<Search />}
        iconPosition={"right"}
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
  );
};
export default LocalSearchBar;
