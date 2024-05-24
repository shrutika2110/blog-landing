
import Text from "@/components/composite/Text";
import Heading from "@/components/composite/Heading";
import { Card, CardContent, CardDate, CardTime, CardTitle, CardVideo } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


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
                            <div className="relative h-full" >
                                    <div className="relative min-h-97.5 h-full rounded overflow-hidden  w-full  after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black-grad">
                                            <div className="h-full">
                                                <CardVideo src="/images/blogs/smallVideo.mp4" isLarge autoplay loop />
                                            </div>
                                    </div>

                                    <div className="absolute bottom-4.5 left-4.5 w-full">
                                        <Text className="text-white font-extrabold md:text-2xl xl:text-4xl xl:max-w-8/12 leading-7.5">
                                            Hypertension - causes, complications and cure
                                        </Text>
                                    </div>
                            </div>
                        </div>
                    <div className="xl:col-span-1">
                        <div className="flex flex-col gap-5 xl:gap-8">
                        {videos.map((video, index) => (
                            <Card key={index}  >
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-4">
                                            <div className="h-full">
                                                <CardVideo src={video.src} roundedLeft />
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
                                                <CardVideo src="/images/blogs/smallVideo.mp4"  />
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
