'use client'
import { paginate } from "@/lib/helpers";
import { useState } from "react";
import Pagination from "@/components/utility/pagination";
import Heading from "@/components/composite/Heading";
import SearchListBlog from "./searchListBlog";
import SearchListVideo from "./searchListVideo";
import Text from "@/components/composite/Text";

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
                
                    {paginatedData.length > 0 ?
                        <div className="grid grid-cols-1 gap-5 lg:gap-9 mt-5 mb-7">
                           { paginatedData.map((post:any, index:any) => (
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
                        :
                        <div className="text-center gap-2 flex flex-col mt-5 mb-20">
                            <Heading level={1} variant="light" className="text-4.5xl font-extrabold text-black-900">Sorry!</Heading>
                            <Text variant="light" size="lg" className="text-black-900 font-medium">We were not able to find anything related “{query}”</Text>
                        </div>
                    }

               
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
