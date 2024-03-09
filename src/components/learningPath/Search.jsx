import { searchAction } from "@/actions/search";
import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = ({ query, domain }) => {
  return (
    <form action={searchAction}>
      <div className="flex items-center gap-2 border ring-1 ring-ring rounded-xl px-4 w-5/6 h-12 min-w-[80rem] max-w-[80rem]">
        <Search className="h- w-6" />
        <Input
          name="query"
          placeholder="Search for videos, tags"
          type="search"
          defaultValue={query}
          className="border-none active:border-none focus-visible:ring-0 "
        />
        <Input name="domain" value={domain} type="hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
