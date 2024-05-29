
import Heading from "@/components/composite/Heading";
import { Card, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import VideoIframe from "@/components/utility/videoIframe";
import { dateFormate } from "@/lib/helpers";
import CalculateVideoDuration from "@/components/utility/calculateVideoDuration";
import Link from "next/link";

interface Props {
    videosData?: any;
}


export default function Videos({videosData}: Props) {

    const firstVideo = videosData && videosData[0];
    const otherVideos = videosData && videosData.slice(1, 4);

    return (
            <div className="mt-7 pt-5 border-t border-offwhite-700 border-b pb-4 mb-10" id="videos">
                <Heading level={3} variant="primary" className="font-extrabold">
                    Videos
                </Heading>
                <div className="grid xl:grid-cols-2 gap-5 xl:gap-8 mt-5 mb-7">
                    <div className="xl:col-span-1">
                            <Card className="h-full">
                                <CardContent className="relative h-full p-0">
                                    <VideoIframe videoId={firstVideo?.attributes?.Link} size="lg" inlinePlay />
                                    <CardTitle variant="dark" size="lg" className="absolute bottom-4.5 left-4.5 w-full xl:max-w-8/12">
                                        {firstVideo?.attributes?.Title}
                                    </CardTitle>
                                </CardContent>
                            </Card>
                        </div>
                    <div className="xl:col-span-1">
                        <div className="flex flex-col gap-5 xl:gap-8">
                        {otherVideos.map((video:any, index:any) => (
                            <Card key={index}  >
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-4">
                                            <div className="h-full max-h-27.5">
                                                <VideoIframe videoId={video?.attributes?.Link} coverImg={video?.attributes?.CoverImg?.data?.attributes?.url} />
                                            </div>
                                        </div>
                                        <div className="col-span-8">
                                            <div className="p-4.5">
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
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        </div>
                    </div>

                </div>
                <div className="grid lg:grid-cols-3 gap-5 my-5">
                        {otherVideos.map((video:any, index:any) => (
                            <Card className="border-none bg-gray-250 rounded " key={index}>
                                    <CardContent className="p-0">
                                            <div className="h-48">
                                                <VideoIframe videoId={video?.attributes?.Link} size="md" coverImg={video?.attributes?.CoverImg?.data?.attributes?.url} />
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
                        ))}
                      
                </div>
                <div className="flex items-end justify-end">
                        <Button variant="outline" asChild >
                            <Link href="/videos">
                                    See all
                            </Link>
                        </Button>
                </div>
            </div>
    );
};
