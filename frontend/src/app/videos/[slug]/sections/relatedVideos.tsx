'use client'
import { Card, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import VideoIframe from "@/components/utility/videoIframe";
import CalculateVideoDuration from "@/components/utility/calculateVideoDuration";
import { Button } from "@/components/ui/button";
import { formatRelativeDate } from "@/components/utility/formatDateFromNow";

interface Props {
    videosData?: any;
}

export default function RelatedVideos({videosData}:Props) {

    return (
        <>
            {
                videosData && 
                    <>
                    <div className="w-full">
                        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
                                { videosData.slice(0,9).map((video:any, index:any) => (
                                        <Card key={index}>
                                                <CardContent className="p-0">
                                                        <div className="h-48">
                                                            <VideoIframe videoId={video?.attributes?.Link} size="md" coverImg={video?.attributes?.CoverImg?.data?.attributes?.url} />
                                                        </div>
                                                        <div >
                                                            <Link href={'/videos/' + video?.attributes?.slug} >
                                                                <div className="p-3 xl:p-5">
                                                                    <CardTitle className="mb-3">{video?.attributes?.Title}</CardTitle>
                                                                    <div className="flex gap-2 xl:gap-3 items-center">
                                                                        <CardDate>{formatRelativeDate(video?.attributes?.publishedAt)}</CardDate>
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
                    </div>
                    <div className="flex items-end justify-end mb-20">
                        <Button variant="outline" asChild >
                            <Link href="/videos">
                                    See all
                            </Link>
                        </Button>
                    </div>
                </>
            }
        </>
    );
};
