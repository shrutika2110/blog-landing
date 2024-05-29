import Heading from "@/components/composite/Heading";
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import Carousel from "@/components/utility/Carousel";
import extractAndCalculateReadTime from "@/components/utility/calculateReadTime";
import { dateFormate } from "@/lib/helpers";
import Link from "next/link";

interface Props {
    blogsData?: any;
}

export default function Trending({blogsData}: Props) {

    const trendingBlogs = blogsData && blogsData
          .filter((data: any) => data?.attributes?.trending)
          .sort(
            (a: any, b: any) =>
              new Date(b.attributes?.publish_date).getTime() -
              new Date(a.attributes?.publish_date).getTime(),
          )


    return (
            <div className="my-5">
                <Heading level={3} className="text-skyBlue-150  font-extrabold">
                    Trending
                </Heading>
                <div className="my-5 w-full">
                <Carousel
                    slidesToShow={3}
                    slidesToScroll={1}
                    arrows={true}
                    dots={false}
                    mdSlidesToShow={1}
                    smSlidesToShow={1}
                    autoplay={true}
                    infinite={true}
                    autoplaySpeed={2000}
                >
          
                    {trendingBlogs.map((blog:any, index:any) => (
                        <Link href={'/blogs/' +blog?.attributes?.slug} key={index}>

                            <Card  >
                                <CardContent className="p-0">
                                    <div className="h-48">
                                        <CardBanner src={blog?.attributes?.coverImg?.data?.attributes?.url}></CardBanner>
                                    </div>
                                    <div>
                                        <div className="p-3 xl:p-5">
                                            <CardTitle className="mb-3">{blog?.attributes?.Title}</CardTitle>
                                            <div className="flex gap-3 items-center">
                                                <CardDate>{dateFormate(blog?.attributes?.publish_date)}</CardDate>
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
    );
};
