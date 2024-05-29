'use client'
import Heading from "@/components/composite/Heading";
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { dateFormate, paginate } from "@/lib/helpers";
import extractAndCalculateReadTime from "@/components/utility/calculateReadTime";
import { useState } from "react";
import Pagination from "@/components/utility/pagination";
import Breadcrumb from "@/components/utility/breadcrumb";
import Link from "next/link";

interface Props {
    blogsData?: any;
}

export default function BlogList({blogsData}: any) {

    const allBlogs = blogsData && blogsData
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
 
    const paginatedBlogs = paginate(allBlogs, currentPage, pageSize);

    const crumbs = [{ title: 'Home', path: '/' }, { title: 'Blogs' }];

    return (
        <div id="blogs">
            <div className="pt-5 mt-3" >
                <Breadcrumb crumbs={crumbs} />
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 mt-5 mb-7">
                            {paginatedBlogs && paginatedBlogs.map((blog:any, index:any) => (
                                <Link href={'/blogs/' +blog?.attributes?.slug}>
                                <Card key={index} >
                                <CardContent className="p-0">
                                    <div className="h-48">
                                        <CardBanner src={blog?.attributes?.coverImg?.data?.attributes?.url}></CardBanner>
                                    </div>
                                    <div>
                                        <div className="p-3 xl:p-5">
                                            <CardTitle className="mb-3">{blog?.attributes?.Title}</CardTitle>
                                            <div className="flex gap-3 items-center">
                                                <CardDate>{dateFormate(blog?.attributes?.publish_date)}</CardDate>
                                                <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                <CardTime>{extractAndCalculateReadTime(blog)}</CardTime>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            </Link>
                            ))}
                        

                </div>
                <Pagination
                    items={allBlogs.length} 
                    currentPage={currentPage} 
                    pageSize={pageSize} 
                    onPageChange={onPageChange}
                        />

            </div>
        </div>
    );
};
