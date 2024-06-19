'use client'
import { Card, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { paginate } from "@/lib/helpers";
import { useState } from "react";
import Pagination from "@/components/utility/pagination";
import Breadcrumb from "@/components/utility/breadcrumb";
import Link from "next/link";
import VideoIframe from "@/components/utility/videoIframe";
import CalculateVideoDuration from "@/components/utility/calculateVideoDuration";
import { formatRelativeDate } from "@/components/utility/formatDateFromNow";
import Newsletter from "@/app/sections/newsletter";

interface Props {
    videosData?: any;
}

export default function VideoList({videosData}: any) {

    const allVideos = videosData && videosData
    .sort((a:any, b:any) => {
        const dateA = new Date(a.attributes.publish_date || a.attributes.publishedAt);
        const dateB = new Date(b.attributes.publish_date || b.attributes.publishedAt);
        return dateB.getTime() - dateA.getTime();
    })

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;

    const onPageChange = (page:any) => {
        setCurrentPage(page);
    };
 
    const paginatedVideos = paginate(allVideos, currentPage, pageSize);

    const crumbs = [{ title: 'Home', path: '/' }, { title: 'Videos' }];

    return (
        <div id="blogs">
            <div className="pt-5 mt-3 mb-10" >
                <Breadcrumb crumbs={crumbs} />
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 mt-5 mb-7">
                            {paginatedVideos && paginatedVideos.map((video:any, index:any) => (

                                    <Card key={index} >
                                        <CardContent className="p-0">
                                                <div className="h-48">
                                                    <VideoIframe videoId={video?.attributes?.Link} size="md" coverImg={video?.attributes?.CoverImg?.data?.attributes?.url} />
                                                </div>
                                                <div >
                                                    <Link href={'/videos/' + video?.attributes?.slug}  >

                                                        <div className="p-3 xl:p-5">
                                                            <CardTitle className="mb-3">{video?.attributes?.Title}</CardTitle>
                                                            <div className="flex gap-2 xl:gap-3 items-center">
                                                                <CardDate>{formatRelativeDate(video?.attributes?.publish_date || video?.attributes?.publishedAt)}</CardDate>
                                                                <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                                <CardTime>
                                                                    <CalculateVideoDuration videoUrl={video?.attributes?.Link} />
                                                                </CardTime>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                </div>
                                        </CardContent>
                                    </Card>
                            ))}
                        

                </div>
                <Newsletter page="videoList" />
                <Pagination
                    items={allVideos && allVideos.length} 
                    currentPage={currentPage} 
                    pageSize={pageSize} 
                    onPageChange={onPageChange}
                        />

            </div>
        </div>
    );
};
