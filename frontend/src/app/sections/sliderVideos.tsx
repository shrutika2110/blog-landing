
import { Card, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import VideoIframe from "@/components/utility/videoIframe";
import CalculateVideoDuration from "@/components/utility/calculateVideoDuration";
import Link from "next/link";
import { formatRelativeDate } from "@/components/utility/formatDateFromNow";

interface Props {
    video?: any;
}


export default function sliderVideos({video}: Props) {

    return (
        <Link href={'/videos/' + video?.attributes?.slug} >
            <Card>
                <CardContent className="p-0">
                        <div className="h-27 lg:h-48">
                            <VideoIframe videoId={video?.attributes?.Link} size="md" coverImg={video?.attributes?.CoverImg?.data?.attributes?.url} />
                        </div>
                        <div >
                                <div className="p-2 xl:p-5">
                                    <CardTitle className="mb-3">{video?.attributes?.Title}</CardTitle>
                                    <div className="flex gap-2 xl:gap-3 items-center">
                                        <CardDate>{formatRelativeDate(video?.attributes?.Date || video?.attributes?.publishedAt)}</CardDate>
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
    );
};
