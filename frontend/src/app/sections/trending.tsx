
import Image from "next/image";
import Text from "@/components/composite/Text";

import Heading from "@/components/composite/Heading";
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { MdOutlineAccessTime } from "react-icons/md";

const cardData = [
    {
        src: "/images/blogs/blog2.svg",
        title: "Hypertension- causes, complications and cure space for longer text",
        date: "2 days ago",
        time: "3 min"
    },
    {
        src: "/images/blogs/blog2.svg",
        title: "Hypertension- causes, complications and cure space for longer text",
        date: "2 days ago",
        time: "3 min"
    },
    {
        src: "/images/blogs/blog2.svg",
        title: "Hypertension- causes, complications and cure space for longer text",
        date: "2 days ago",
        time: "3 min"
    }
];

export default function Trending() {

    return (
            <div className="my-5">
                <Heading level={3} className="text-skyBlue-150 md:text-base xl:text-2xl font-extrabold">
                    Trending
                </Heading>
                <div className="grid lg:grid-cols-3 gap-5 my-5">
                    {cardData.map((card, index) => (
                        <Card key={index} className="border-none bg-gray-250 rounded">
                            <CardContent className="p-0">
                                <div className="h-48">
                                    <CardBanner src={card.src}></CardBanner>
                                </div>
                                <div>
                                    <div className="p-3 xl:p-5">
                                        <CardTitle>{card.title}</CardTitle>
                                        <div className="flex gap-3 items-center">
                                            <CardDate>{card.date}</CardDate>
                                            <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                            <div className="flex items-center gap-1 text-gray-350">
                                                <MdOutlineAccessTime />
                                                <CardTime>{card.time}</CardTime>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
    );
};
