import { searchAction } from "@/actions/search";
import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = ({ query, domain }) => {
  return (
    <form action={searchAction}>
      <div className="flex items-center gap-2 border ring-1 ring-ring rounded-xl px-4  h-12 m-auto md:min-w-[40rem] xl:min-w-[70rem] ">
        <Search className="h- w-6" />
        <Input
          name="query"
          placeholder="Search for videos, tags"
          type="search"
          defaultValue={query}
          className="border-none outline-none focus:border-none focus:outline-none md:min-w-[35rem] xl:min-w-[65rem]"
        />
        <Input name="domain" value={domain} type="hidden"  />
      </div>
    </form>
  );
};

export default SearchBar;
