'use client'
import { Card, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { dateFormate, paginate } from "@/lib/helpers";
import { useState } from "react";
import Pagination from "@/components/utility/pagination";
import Breadcrumb from "@/components/utility/breadcrumb";
import Link from "next/link";
import VideoIframe from "@/components/utility/videoIframe";
import CalculateVideoDuration from "@/components/utility/calculateVideoDuration";

interface Props {
    videosData?: any;
}

export default function VideoList({videosData}: any) {

    const allVideos = videosData && videosData
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
 
    const paginatedBlogs = paginate(allVideos, currentPage, pageSize);

    const crumbs = [{ title: 'Home', path: '/' }, { title: 'Videos' }];

    return (
        <div id="blogs">
            <div className="pt-5 mt-3" >
                <Breadcrumb crumbs={crumbs} />
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 mt-5 mb-7">
                            {paginatedBlogs && paginatedBlogs.map((video:any, index:any) => (
                                <Link href={'/blogs/' +video?.attributes?.slug} key={index} >
                                <Card className="border-none bg-gray-250 rounded " key={index}>
                                    <CardContent className="p-0">
                                            <div className="h-48">
                                                <VideoIframe videoId={video?.attributes?.Link} />
                                            </div>
                                            <div >
                                                <div className="p-3 xl:p-5">
                                                    <CardTitle className="mb-3">{video?.attributes?.Title}</CardTitle>
                                                    <div className="flex gap-3 items-center">
                                                        <CardDate>{dateFormate(video?.attributes?.Date || video?.attributes?.publishedAt)}</CardDate>
                                                        <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                        <CardTime>
                                                            <CalculateVideoDuration videoUrl={video?.attributes?.Link} />
                                                        </CardTime>
                                                    </div>
                                                </div>
                                            </div>
                                    </CardContent>
                            </Card>
                            </Link>
                            ))}
                        

                </div>
                <Pagination
                    items={allVideos.length} 
                    currentPage={currentPage} 
                    pageSize={pageSize} 
                    onPageChange={onPageChange}
                        />

            </div>
        </div>
    );
};
