
import Heading from "@/components/composite/Heading";
import { Card, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import VideoIframe from "@/components/utility/videoIframe";
import CalculateVideoDuration from "@/components/utility/calculateVideoDuration";
import Link from "next/link";
import { formatRelativeDate } from "@/components/utility/formatDateFromNow";
import Carousel from "@/components/utility/Carousel";
import SliderVideos from "./sliderVideos";

interface Props {
    videosData?: any;
}


export default function Videos({videosData}: Props) {

    const firstVideo = videosData && videosData[0];
    const topVideos = videosData && videosData.slice(1, 4);
    const otherVideos = videosData && videosData.slice(1, 4);

    return (
            <div className="mt-7 pt-5 border-t border-offwhite-700 border-b pb-4 mb-10" id="videos">
                <Heading level={3} variant="primary" className="font-extrabold">
                    Videos
                </Heading>
                <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 mt-5 mb-7">
                    <div className="lg:col-span-1">
                            <Link href={'/videos/' + firstVideo?.attributes?.slug} >
                                <Card className="h-full">
                                    <CardContent className="relative h-full p-0">
                                        <VideoIframe videoId={firstVideo?.attributes?.Link} size="lg" inlinePlay />
                                        <CardTitle variant="dark" size="lg" className="absolute bottom-4.5 left-4.5 w-full lg:max-w-8/12 z-35">
                                            {firstVideo?.attributes?.Title}
                                        </CardTitle>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    <div className="lg:col-span-1">
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-8">
                        {topVideos && topVideos.map((video:any, index:any) => (
                        <Link href={'/videos/' + video?.attributes?.slug} key={index}>
                            <Card >
                                <CardContent className="p-0">
                                    <div className="grid lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <div className="h-full max-h-27.5">
                                                <VideoIframe videoId={video?.attributes?.Link} coverImg={video?.attributes?.CoverImg?.data?.attributes?.url} />
                                            </div>
                                        </div>
                                        <div className="lg:col-span-8">
                                                <div className="p-2 xl:p-4.5">
                                                    <CardTitle className="mb-3">{video?.attributes?.Title}</CardTitle>
                                                    <div className="flex gap-2 xl:gap-3 items-center">
                                                        <CardDate>{formatRelativeDate(video?.attributes?.publishedAt)}</CardDate>
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
                            </Link>

                            
                        ))}
                        </div>
                    </div>

                </div>

                {/* Slider videos */}
                <div className="grid grid-cols-2 lg:hidden xl:grid xl:grid-cols-3 gap-5 my-5">
                        {otherVideos && otherVideos.map((video:any, index:any) => (
                            <SliderVideos video={video} index={index} />
                        ))}
                </div>
                {/* Slider only in tabs */}
                <div className=" hidden lg:block xl:hidden gap-5 my-5">
                        <Carousel
                            slidesToShow={3}
                            slidesToScroll={1}
                            arrow={true}
                            dots={false}
                            mdSlidesToShow={1}
                            smSlidesToShow={1}
                            autoplay={true}
                            infinite={true}
                            autoplaySpeed={2000}
                            centerMode={true}
                        >
                                {otherVideos && otherVideos.map((video:any, index:any) => (
                                    <SliderVideos video={video} index={index} />
                                ))}
                        </Carousel>
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
