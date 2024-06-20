'use client'
import { paginate } from "@/lib/helpers";
import { useState } from "react";
import Pagination from "@/components/utility/pagination";
import Heading from "@/components/composite/Heading";
import SearchListBlog from "./searchListBlog";
import SearchListVideo from "./searchListVideo";
import NullPoint from "@/components/utility/nullPoint";

interface Props {
    searchData?: any;
    query ?: any;
}

export default function SearchList({searchData, query}: Props) {

    const allSearchData = searchData && searchData
    .sort((a:any, b:any) => {
        const dateA = new Date(a.attributes.publishedAt);
        const dateB = new Date(b.attributes.publishedAt);
        return dateB.getTime() - dateA.getTime();
    })

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;

    const onPageChange = (page:any) => {
        setCurrentPage(page);
    };
 
    const paginatedData = paginate(allSearchData, currentPage, pageSize);

    return (
        <div id="search">
            <div className={`pt-5 mt-3  mx-auto ${paginatedData && paginatedData.length > 0 && 'mb-10  xl:max-w-290'}`} >
                    <div className="container">
                        <Heading level={1} variant="primary"  className="text-blue-350 xl:text-5.5xl  ">
                            {query}
                        </Heading>
                    </div>
                
                    {paginatedData && paginatedData.length > 0 ?
                        <div className="container">
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
                        </div>
                        :
                        <div className="mt-10">
                        <NullPoint pageUrl={query} />
                        </div>
                    }

               
                <Pagination
                    items={allSearchData && allSearchData.length} 
                    currentPage={currentPage} 
                    pageSize={pageSize} 
                    onPageChange={onPageChange}
                />

            </div>
        </div>
    );
};
