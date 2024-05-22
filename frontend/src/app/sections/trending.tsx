
import Image from "next/image";
import Text from "@/components/composite/Text";

import Heading from "@/components/composite/Heading";
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { MdOutlineAccessTime } from "react-icons/md";


export default function Trending() {

    return (
            <div className="my-5">
                <Heading level={3} className="text-skyBlue-150 md:text-base xl:text-2xl font-extrabold">
                    Trending
                </Heading>
                <div className="grid lg:grid-cols-3 gap-5 my-5">
                       <Card className="border-none bg-gray-250 rounded  ">
                            <CardContent className="p-0">
                                    <div className="h-48">
                                        <CardBanner src="/images/blogs/blog2.svg" ></CardBanner>
                                    </div>
                                    <div >
                                        <div className="p-3 xl:p-5">
                                             <CardTitle>Hypertension- causes, complications and cure space for longer text</CardTitle>
                                            <div className="flex gap-3 items-center">
                                                <CardDate>2 days ago</CardDate>
                                                <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                <div className="flex items-center gap-1 text-gray-350">
                                                    <MdOutlineAccessTime />
                                                    <CardTime>3 min</CardTime>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </CardContent>
                       </Card>
                       <Card className="border-none bg-gray-250 rounded  ">
                            <CardContent className="p-0">
                                    <div className="h-48">
                                        <CardBanner src="/images/blogs/blog2.svg"></CardBanner>
                                    </div>
                                    <div >
                                        <div className="p-3 xl:p-5">
                                             <CardTitle>Hypertension- causes, complications and cure space for longer text</CardTitle>
                                            <div className="flex gap-3 items-center">
                                                 <CardDate>2 days ago</CardDate>
                                                <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                <div className="flex items-center gap-1 text-gray-350">
                                                    <MdOutlineAccessTime />
                                                    <CardTime>3 min</CardTime>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </CardContent>
                       </Card>
                       <Card className="border-none bg-gray-250 rounded  ">
                            <CardContent className="p-0">
                                    <div className="h-48">
                                        <CardBanner src="/images/blogs/blog2.svg"  ></CardBanner>
                                    </div>
                                    <div >
                                        <div className="p-3 xl:p-5">
                                             <CardTitle>Hypertension- causes, complications and cure space for longer text</CardTitle>
                                            <div className="flex gap-3 items-center">
                                                 <CardDate>2 days ago</CardDate>
                                                <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                <div className="flex items-center gap-1 text-gray-350">
                                                    <MdOutlineAccessTime />
                                                    <CardTime>3 min</CardTime>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </CardContent>
                       </Card>
                </div>
            </div>
    );
};
