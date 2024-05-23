
import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";
import { Card, CardContent, CardDate, CardTime, CardTitle, CardVideo } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function Videos() {

    return (
        <>
            <Heading level={3} className="text-primary md:text-base xl:text-2xl font-extrabold">
                Videos
            </Heading>
            <div className="grid xl:grid-cols-2 gap-5 xl:gap-8 mt-5 mb-7">
                    <div className="xl:col-span-1">
                            <div className="relative h-full" >
                                    <div className="relative min-h-97.5 h-full rounded overflow-hidden  w-full  after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black-grad">
                                            <div className="h-full">
                                                <CardVideo src="/images/blogs/smallVideo.mp4"  isLarge />
                                            </div>
                                    </div>

                                    <div className="absolute bottom-4.5 left-4.5 w-full">
                                        <Text className="text-white font-extrabold md:text-2xl xl:text-4xl xl:max-w-8/12 leading-extra-tight">
                                            Hypertension - causes, complications and cure
                                        </Text>
                                    </div>
                            </div>
                        </div>
                    <div className="xl:col-span-1">
                        <div className="flex flex-col gap-5 xl:gap-8">
                            <Card className="border-none bg-gray-250 rounded  ">
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-4">
                                            <div className="h-full">
                                                <CardVideo src="/images/blogs/smallVideo.mp4"  roundedLeft />
                                            </div>

                                        </div>
                                       
                                        <div className="col-span-8">
                                            <div className="p-3 xl:p-5">
                                                <CardTitle>Hypertension- causes, complications and cure space for longer text</CardTitle>
                                                <div className="flex gap-3 items-center">
                                                     <CardDate>2 days ago</CardDate>
                                                    <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                    <CardTime>3 min</CardTime>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-none bg-gray-250 rounded  ">
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-4">
                                            <div className="h-full">
                                                <CardVideo src="/images/blogs/smallVideo.mp4"  roundedLeft />
                                            </div>
                                        </div>
                                        <div className="col-span-8">
                                            <div className="p-5">
                                                 <CardTitle>Hypertension- causes, complications and cure space for longer text</CardTitle>
                                                <div className="flex gap-3 items-center">
                                                     <CardDate>2 days ago</CardDate>
                                                    <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                    <CardTime>3 min</CardTime>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>


                            <Card className="border-none bg-gray-250 rounded">
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-4">
                                            <div className="h-full">
                                                <CardVideo src="/images/blogs/smallVideo.mp4"  roundedLeft />
                                            </div>
                                        </div>
                                        <div className="col-span-8">
                                            <div className="p-5">
                                                 <CardTitle>Hypertension- causes, complications and cure space for longer text</CardTitle>
                                                <div className="flex gap-3 items-center">
                                                     <CardDate>2 days ago</CardDate>
                                                    <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                    <CardTime>3 min</CardTime>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                </div>
            <div className="flex items-end justify-end">
                <Button variant="outline">
                    See all
                </Button>
            </div>
        </>
    );
};
