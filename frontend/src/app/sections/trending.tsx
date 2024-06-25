import Heading from "@/components/composite/Heading";
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import Carousel from "@/components/utility/Carousel";
import extractAndCalculateReadTime from "@/components/utility/calculateReadTime";
import { formatRelativeDate } from "@/components/utility/formatDateFromNow";
import Link from "next/link";

interface Props {
    blogsData?: any;
}

export default function Trending({ blogsData }: Props) {

    if (!blogsData || blogsData.length === 0) {
        return null;
    }


    const trendingBlogs = blogsData && blogsData
        .filter((data: any) => data?.attributes?.trending)
        .sort((a: any, b: any) => {
            const dateA = new Date(a.attributes.publish_date || a.attributes.publishedAt);
            const dateB = new Date(b.attributes.publish_date || b.attributes.publishedAt);
            return dateB.getTime() - dateA.getTime();
        })



    return (
        <>
            {trendingBlogs.length > 0 &&

                <div className="my-5">
                    <Heading level={3} className="text-skyBlue-150  font-extrabold">
                        Trending
                    </Heading>
                    <div className="my-5 w-full">
                        <Carousel
                            slidesToShow={3}
                            slidesToScroll={1}
                            arrow={true}
                            dots={false}
                            mdSlidesToShow={1}
                            smSlidesToShow={1}
                            autoplay={true}
                            infinite={true}
                            centerMode={false}
                        >

                            {trendingBlogs && trendingBlogs.map((blog: any, index: any) => (
                                <Link href={'/blogs/' + blog?.attributes?.slug} key={index}>

                                    <Card>
                                        <CardContent className="p-0">
                                            <div className="h-48">
                                                <CardBanner src={blog?.attributes?.coverImg?.data?.attributes?.url || '/images/poster.jpeg'}></CardBanner>
                                            </div>
                                            <div>
                                                <div className="p-2 xl:p-5">
                                                    <CardTitle className="mb-3">{blog?.attributes?.Title}</CardTitle>
                                                    <div className="flex gap-2 xl:gap-3 items-center">
                                                        <CardDate>{formatRelativeDate(blog?.attributes?.publish_date || blog?.attributes?.publishedAt)}</CardDate>
                                                        <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                        <CardTime>{extractAndCalculateReadTime(blog)}</CardTime>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </Carousel>
                    </div>
                </div>

            }
        </>
    );
};
