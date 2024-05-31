'use client'
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { dateFormate, paginate } from "@/lib/helpers";
import { useState } from "react";
import Pagination from "@/components/utility/pagination";
import Link from "next/link";
import extractAndCalculateReadTime from "@/components/utility/calculateReadTime";
import Heading from "@/components/composite/Heading";

interface Props {
    searchData?: any;
}

export default function SearchList({searchData}: any) {

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
                     Hypertension- causes, complications
                </Heading>
                <div className="grid grid-cols-1 gap-5 lg:gap-9 mt-5 mb-7">
                    {paginatedData && paginatedData.map((blog:any, index:any) => (
                            <Link href={'/blogs/' +blog?.attributes?.slug} key={index}>
                            <Card className="bg-gray-700 "  >
                                <CardContent className="p-0 ">
                                    <div className="grid grid-cols-12 min-h-35 lg:min-h-50" >
                                        <div className="col-span-4">
                                            <CardBanner src={blog?.attributes?.coverImg?.data?.attributes?.url} roundedLeft></CardBanner>
                                        </div>
                                        <div className="col-span-8">
                                            <div className="flex items-center h-full">
                                                <div className="p-3 xl:p-5 ">
                                                    <CardTitle className="mb-3 lg:mb-6 h-22 max-h-22 xl:leading-11" size="lg">{blog?.attributes?.Title}</CardTitle>
                                                    <div className="flex gap-3 items-center">
                                                        <CardDate>{dateFormate(blog?.attributes?.publish_date)}</CardDate>
                                                        <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                        <CardTime>{extractAndCalculateReadTime(blog)}</CardTime>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            </Link>
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
