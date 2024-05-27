
import Heading from "@/components/composite/Heading";
import { Card, CardContent, CardCoverTitle, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import VideoIframe from "@/components/utility/videoIframe";

export default function Videos() {
    const videos = [
        { src: "/images/blogs/smallVideo.mp4", title: "Hypertension- causes, complications and cure space for longer text", date: "2 days ago", time: "3 min" },
        { src: "/images/blogs/smallVideo.mp4", title: "Hypertension- causes, complications and cure space for longer text", date: "2 days ago", time: "3 min" },
        { src: "/images/blogs/smallVideo.mp4", title: "Hypertension- causes, complications and cure space for longer text", date: "2 days ago", time: "3 min" },
    ];
    const otherVideos = [
        { src: "/images/blogs/smallVideo.mp4", title: "Hypertension- causes, complications and cure space for longer text", date: "2 days ago", time: "3 min" },
        { src: "/images/blogs/smallVideo.mp4", title: "Hypertension- causes, complications and cure space for longer text", date: "2 days ago", time: "3 min" },
        { src: "/images/blogs/smallVideo.mp4", title: "Hypertension- causes, complications and cure space for longer text", date: "2 days ago", time: "3 min" },
    ];
    return (
            <div className="mt-7 pt-5 border-t border-offwhite-700 border-b  pb-4 mb-10" id="videos">
                <Heading level={3} className="text-primary md:text-base xl:text-2xl font-extrabold">
                    Videos
                </Heading>
                <div className="grid xl:grid-cols-2 gap-5 xl:gap-8 mt-5 mb-7">
                    <div className="xl:col-span-1">
                            <Card className="h-full">
                                <CardContent className="relative h-full p-0">
                                    <VideoIframe videoId="ZjAqacIC_3c" isLarge />
                                    <CardCoverTitle>
                                        Hypertension - causes, complications and cure
                                    </CardCoverTitle>
                                </CardContent>
                            </Card>

                        </div>
                    <div className="xl:col-span-1">
                        <div className="flex flex-col gap-5 xl:gap-8">
                        {videos.map((video, index) => (
                            <Card key={index}  >
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-4">
                                            <div className="h-full">
                                                <VideoIframe videoId="ZjAqacIC_3c" />
                                            </div>
                                        </div>
                                        <div className="col-span-8">
                                            <div className="p-5">
                                                <CardTitle>{video.title}</CardTitle>
                                                <div className="flex gap-3 items-center">
                                                    <CardDate>{video.date}</CardDate>
                                                    <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                    <CardTime>{video.time}</CardTime>
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
                        {otherVideos.map((video, index) => (
                            <Card className="border-none bg-gray-250 rounded " key={index}>
                                    <CardContent className="p-0">
                                            <div className="h-48">
                                                <VideoIframe videoId="ZjAqacIC_3c" />
                                            </div>
                                            <div >
                                                <div className="p-3 xl:p-5">
                                                    <CardTitle>{video.title}</CardTitle>
                                                    <div className="flex gap-3 items-center">
                                                        <CardDate>{video.date}</CardDate>
                                                        <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                        <CardTime>{video.time}</CardTime>
                                                    </div>
                                                </div>
                                            </div>
                                    </CardContent>
                            </Card>
                        ))}
                      
                </div>
                <div className="flex items-end justify-end">
                    <Button variant="outline">
                        See all
                    </Button>
                </div>
            </div>
    );
};
