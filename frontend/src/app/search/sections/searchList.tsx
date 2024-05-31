'use client'
import { paginate } from "@/lib/helpers";
import { useState } from "react";
import Pagination from "@/components/utility/pagination";
import Heading from "@/components/composite/Heading";
import SearchListBlog from "./searchListBlog";
import SearchListVideo from "./searchListVideo";

interface Props {
    searchData?: any;
    query ?: any;
}

export default function SearchList({searchData, query}: Props) {

    const allSearchData = searchData && searchData
    .sort(
      (a: any, b: any) =>
        new Date(b.attributes?.publish_date).getTime() -
        new Date(a.attributes?.publish_date).getTime(),
    );

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;

    const onPageChange = (page:any) => {
        setCurrentPage(page);
    };
 
    const paginatedData = paginate(allSearchData, currentPage, pageSize);

    return (
        <div id="search">
            <div className="pt-5 mt-3 mb-10 xl:max-w-290 mx-auto" >
                <Heading level={1} variant="primary"  className="text-blue-350 xl:text-5.5xl font-inter">
                     {query}
                </Heading>
                <div className="grid grid-cols-1 gap-5 lg:gap-9 mt-5 mb-7">
                    {paginatedData && paginatedData.map((post:any, index:any) => (
                        <div key={index} >
                        {
                            post.type == "youtube" ? 
                            <SearchListVideo post={post}  />
                            : 
                            <SearchListBlog post={post}  />
                         }
                        </div>
                    ))}
                </div>
                <Pagination
                    items={allSearchData.length} 
                    currentPage={currentPage} 
                    pageSize={pageSize} 
                    onPageChange={onPageChange}
                />

            </div>
        </div>
    );
};
