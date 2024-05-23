import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";
import Image from "next/image";
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogData = [
    {
        imageUrl: "/images/blogs/blog2.svg",
        title: "Hypertension - causes, complications and cure space for longer text",
        date: "2 days ago",
        time: "3 min"
    },
    {
        imageUrl: "/images/blogs/blog2.svg",
        title: "Hypertension - causes, complications and cure space for longer text",
        date: "2 days ago",
        time: "3 min"
    },
    {
        imageUrl: "/images/blogs/blog2.svg",
        title: "Hypertension - causes, complications and cure space for longer text",
        date: "2 days ago",
        time: "3 min"
    }
];

export default function Blogs() {

    return (
        <>
            <Heading level={3} className="text-primary md:text-base xl:text-2xl font-extrabold">
                Blogs
            </Heading>
            <div className="grid xl:grid-cols-2 gap-5 xl:gap-8 mt-5 mb-7">
                <div className="xl:col-span-1">
                        <div className="relative h-full" >
                                <div className="relative min-h-97.5 h-full rounded overflow-hidden  w-full  after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black-grad">
                                    <Image
                                    src="/images/blogs/blog1.jpeg"
                                    alt="Hypertension - causes, 
                                    complications and cure"
                                    fill={true}
                                    objectFit="cover"
                                    />
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
                        {blogData.map((blog, index) => (
                            <Card key={index}  >
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-4">
                                            <CardBanner src={blog.imageUrl} roundedLeft></CardBanner>
                                        </div>
                                        <div className="col-span-8">
                                            <div className="p-3 xl:p-5">
                                                <CardTitle>{blog.title}</CardTitle>
                                                <div className="flex gap-3 items-center">
                                                    <CardDate>{blog.date}</CardDate>
                                                    <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                    <CardTime>{blog.time}</CardTime>
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
            <div className="flex items-end justify-end">
                <Button variant="outline">
                    See all
                </Button>
            </div>
        </>
    );
};
