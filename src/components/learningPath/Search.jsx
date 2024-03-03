import { searchAction } from "@/app/actions/search";
import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react"

const SearchBar = ({ query, domain }) => {
  return (
    <form action={searchAction}>
      <div className="flex items-center gap-2 border ring-1 ring-ring rounded-full px-4">
        <Search className="h-4 w-4" />
        <Input
          name="query"
          placeholder="Serch for videos, tags, authors, etc."
          type="search"
          defaultValue={query}
          className="border-none active:border-none focus-visible:ring-0"
        />
        <Input name="domain" value={domain} type="hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
