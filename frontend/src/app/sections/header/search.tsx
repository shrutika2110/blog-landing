"use client";
import { Input } from "@/components/ui/input";
import { getBlogsAndVideosByTitle } from "@/service";
import { useCallback, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { debounce } from "lodash";
import SearchDropdown from "./searchDropdown";
import { usePathname, useRouter } from 'next/navigation';

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
    if (newQuery) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const router = useRouter();
  const handleClick = (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
      setIsDropdownOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const pathname = usePathname();
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  return (
    <div className="relative w-7/12 lg:w-67.5">
      <div className="absolute top-2 left-2.5">
        <FiSearch className="text-primary" size={20} />
      </div>
      <div className="bg-search-grad rounded-lg p-px">
        <Input
          className="pl-10 pr-14 h-9 rounded-1.75 border-none"
          placeholder="Search kōfuku"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div
        className={`h-9 w-9 rounded-full absolute right-0 top-px z-10 flex text-white justify-center items-center  transition-all duration-200 ${query.trim() ? ' bg-primary cursor-pointer' : 'bg-gray-150 cursor-not-allowed'}`}
        onClick={handleClick}
      >
        <FaArrowRightLong size={16} />
      </div>
      <div
        className={`h-9 w-9 absolute -right-2 top-px flex bg-white z-5 `}
      >
      </div>
      {isDropdownOpen && <SearchDropdown results={results} query={query} />}
    </div>
  );
}
