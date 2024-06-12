import Heading from "@/components/composite/Heading";
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import extractAndCalculateReadTime from "@/components/utility/calculateReadTime";
import Trending from "./trending";
import Link from "next/link";
import { formatRelativeDate } from "@/components/utility/formatDateFromNow";

interface Props {
    blogsData?: any;
}

export default function Blogs({blogsData}: Props) {
    
    const otherBlogs = blogsData && blogsData
        .filter((data: any) => data?.attributes?.recommended)
        .sort((a: any, b: any) => {
            const dateA = new Date(a.attributes.publishedAt);
            const dateB = new Date(b.attributes.publishedAt);
            return dateB.getTime() - dateA.getTime();
        });

        const firstBlog = otherBlogs && otherBlogs.length > 0 ? otherBlogs[0] : null;
        const remainingBlogs = otherBlogs && otherBlogs.slice(1, 4);

   

    return (
        <div id="blogs">
            <div className="pt-5 mt-3" >
                <Heading level={3} variant="primary" className="font-extrabold">
                    Blogs
                </Heading>
                <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 mt-5 mb-7">
                    <div className="lg:col-span-1">
                        <Link href={'/blogs/' +firstBlog?.attributes?.slug}>
                                <Card className="h-full">
                                        <CardContent className="relative h-full p-0">
                                            <div className="min-h-97.5 rounded overflow-hidden relative w-full h-full after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black-grad ">
                                                <CardBanner src={firstBlog?.attributes?.coverImg?.data?.attributes?.url || '/images/poster.jpeg'}  ></CardBanner>
                                            </div>
                                            <CardTitle variant="dark"  size="lg" className="absolute bottom-4.5 left-4.5 w-full lg:max-w-8/12">
                                                    {firstBlog?.attributes?.Title}
                                            </CardTitle>
                                        </CardContent>
                                </Card>
                            </Link>
                        </div>
                    <div className="lg:col-span-1">
                        <div className="flex flex-col gap-5 lg:gap-8">
                            {remainingBlogs && remainingBlogs.map((blog:any, index:any) => (
                                <Link href={'/blogs/' +blog?.attributes?.slug} key={index}>
                                <Card   >
                                    <CardContent className="p-0">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-4">
                                                <CardBanner src={blog?.attributes?.coverImg?.data?.attributes?.url || '/images/poster.jpeg'} roundedLeft></CardBanner>
                                            </div>
                                            <div className="col-span-8">
                                                <div className="p-2 xl:p-5">
                                                    <CardTitle className="mb-3">{blog?.attributes?.Title}</CardTitle>
                                                    <div className="flex gap-2 xl:gap-3 items-center">
                                                        <CardDate>{formatRelativeDate(blog?.attributes?.publishedAt)}</CardDate>
                                                        <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                        <CardTime>{extractAndCalculateReadTime(blog)}</CardTime>
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
                <div className="flex items-end justify-end">
                        <Button variant="outline" asChild >
                            <Link href="/blogs">
                                    See all
                            </Link>
                        </Button>
                </div>
            </div>
            <Trending blogsData={blogsData} />
        </div>
    );
};
