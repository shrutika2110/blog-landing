"use client";
import { Input } from "@/components/ui/input";
import { getBlogsAndVideosByTitle } from "@/service";
import { useCallback, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { debounce } from "lodash";
import SearchDropdown from "./searchDropdown";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce(async (str) => {
      const { data } = await getBlogsAndVideosByTitle(str);
      const blogs = data.blogs.data.map((blog: any) => ({
        ...blog,
        type: "blog",
      }));
      const youtubes = data.youtubes.data.map((video: any) => ({
        ...video,
        type: "youtube",
      }));
      const combinedSearch = [...blogs, ...youtubes].sort(
        (a: any, b: any) =>
          new Date(b.attributes.publishedAt).getTime() -
          new Date(a.attributes.publishedAt).getTime()
      );
      setResults(combinedSearch);
    }, 500),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
    setIsDropdownOpen(true);
  };

  return (
    <div className="relative w-7/12 lg:w-67.5">
      <div className="absolute top-2 left-2.5">
        <FiSearch className="text-primary" size={20} />
      </div>
      <div className="bg-search-grad rounded-lg p-px">
        <Input
          className="pl-10 pr-14 h-9 rounded-1.75 border-none "
          placeholder="Search kōfuku"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="h-9 w-9 bg-gray-150 rounded-full absolute right-0 top-px flex text-white justify-center items-center cursor-pointer transition-all duration-200 hover:bg-primary">
        <FaArrowRightLong size={16} />
      </div>
      {query && <SearchDropdown results={results} />}
    </div>
  );
}
