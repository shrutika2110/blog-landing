
import Image from "next/image";
import Text from "@/components/composite/Text";

import Heading from "@/components/composite/Heading";
import { Card, CardContent } from "@/components/ui/card";
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
                                    <div className="h-[193px]">
                                        <div className="relative h-full w-full rounded-t overflow-hidden ">
                                            <Image
                                            src="/images/blogs/blog2.svg"
                                            alt="Hypertension "
                                            fill={true}
                                            objectFit="cover"
                                            />
                                        </div>
                                    </div>
                                    <div >
                                        <div className="p-3 xl:p-5">
                                            <Text className="xl:text-base font-bold mb-3 text-black leading-5"> Hypertension- causes, complications and cure space for longer text</Text>
                                            <div className="flex gap-3 items-center">
                                                <Text className="xl:text-sm text-gray-350">2 days ago</Text>
                                                <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                <div className="flex items-center gap-1 text-gray-350">
                                                    <MdOutlineAccessTime />
                                                    <Text className="xl:text-sm  text-gray-350">
                                                    3 min</Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </CardContent>
                       </Card>
                       <Card className="border-none bg-gray-250 rounded  ">
                            <CardContent className="p-0">
                                    <div className="h-[193px]">
                                        <div className="relative h-full w-full rounded-t overflow-hidden ">
                                            <Image
                                            src="/images/blogs/blog2.svg"
                                            alt="Hypertension "
                                            fill={true}
                                            objectFit="cover"
                                            />
                                        </div>
                                    </div>
                                    <div >
                                        <div className="p-3 xl:p-5">
                                            <Text className="xl:text-base font-bold mb-3 text-black leading-5"> Hypertension- causes, complications and cure space for longer text</Text>
                                            <div className="flex gap-3 items-center">
                                                <Text className="xl:text-sm text-gray-350">2 days ago</Text>
                                                <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                <div className="flex items-center gap-1 text-gray-350">
                                                    <MdOutlineAccessTime />
                                                    <Text className="xl:text-sm  text-gray-350">
                                                    3 min</Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </CardContent>
                       </Card>
                       <Card className="border-none bg-gray-250 rounded  ">
                            <CardContent className="p-0">
                                    <div className="h-[193px]">
                                        <div className="relative h-full w-full rounded-t overflow-hidden ">
                                            <Image
                                            src="/images/blogs/blog2.svg"
                                            alt="Hypertension "
                                            fill={true}
                                            objectFit="cover"
                                            />
                                        </div>
                                    </div>
                                    <div >
                                        <div className="p-3 xl:p-5">
                                            <Text className="xl:text-base font-bold mb-3 text-black leading-5"> Hypertension- causes, complications and cure space for longer text</Text>
                                            <div className="flex gap-3 items-center">
                                                <Text className="xl:text-sm text-gray-350">2 days ago</Text>
                                                <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                <div className="flex items-center gap-1 text-gray-350">
                                                    <MdOutlineAccessTime />
                                                    <Text className="xl:text-sm  text-gray-350">
                                                    3 min</Text>
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
