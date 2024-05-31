'use client'
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { dateFormate, paginate } from "@/lib/helpers";
import { useState } from "react";
import Pagination from "@/components/utility/pagination";
import Link from "next/link";
import extractAndCalculateReadTime from "@/components/utility/calculateReadTime";
import Heading from "@/components/composite/Heading";
import VideoIframe from "@/components/utility/videoIframe";

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
                            <Card className="bg-gray-700 " >
                              <CardContent className="p-0 ">
                                  <div className="grid grid-cols-12 min-h-35 lg:min-h-50" >
                                      <div className="col-span-4">
                                            <div className="h-full">
                                                  <VideoIframe videoId={post?.attributes?.Link} size="md" coverImg={post?.attributes?.CoverImg?.data?.attributes?.url} />
                                              </div>
                                      </div>
                                      <div className="col-span-8">
                                            <Link href={ "/videos/" + post?.attributes?.slug } >

                                          <div className="flex items-center h-full">
                                              <div className="p-3 xl:p-5 ">
                                                  <CardTitle className="mb-3 lg:mb-6 h-22 max-h-22 xl:leading-11" size="lg">{post?.attributes?.Title}</CardTitle>
                                                  <div className="flex gap-3 items-center">
                                                      <CardDate>{dateFormate(post?.attributes?.publishedAt)}</CardDate>
                                                      <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                      <CardTime>{extractAndCalculateReadTime(post)}</CardTime>
                                                  </div>
                                              </div>
                                          </div>
                                          </Link>
                                      </div>
                                  </div>
                              </CardContent>
                            </Card>
                            : 
                            <Link href={"/blogs/" + post?.attributes?.slug } >
                              <Card className="bg-gray-700 "  >
                                <CardContent className="p-0 ">
                                    <div className="grid grid-cols-12 min-h-35 lg:min-h-50" >
                                        <div className="col-span-4">
                                            <CardBanner src={post?.attributes?.coverImg?.data?.attributes?.url} roundedLeft></CardBanner> 
                                        </div>
                                        <div className="col-span-8">
                                            <div className="flex items-center h-full">
                                                <div className="p-3 xl:p-5 ">
                                                    <CardTitle className="mb-3 lg:mb-6 h-22 max-h-22 xl:leading-11" size="lg">{post?.attributes?.Title}</CardTitle>
                                                    <div className="flex gap-3 items-center">
                                                        <CardDate>{dateFormate(post?.attributes?.publishedAt)}</CardDate>
                                                        <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                        <CardTime>{extractAndCalculateReadTime(post)}</CardTime>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                              </Card>
                            </Link>
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
