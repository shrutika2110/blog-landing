'use client'
import Heading from "@/components/composite/Heading";
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import extractAndCalculateReadTime from "@/components/utility/calculateReadTime";
import { dateFormate } from "@/lib/helpers";
import Slider from "react-slick";

interface Props {
    blogsData?: any;
}

export default function Trending({blogsData}: Props) {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const trendingBlogs = blogsData
          .filter((data: any) => data?.attributes?.trending)
          .sort(
            (a: any, b: any) =>
              new Date(b.attributes?.publish_date).getTime() -
              new Date(a.attributes?.publish_date).getTime(),
          )


    return (
            <div className="my-5">
                <Heading level={3} className="text-skyBlue-150 md:text-base xl:text-2xl font-extrabold">
                    Trending
                </Heading>
                <div className="my-5">
                <Slider {...settings}>
                    {trendingBlogs.map((card:any, index:any) => (
                        <Card key={index} >
                            <CardContent className="p-0">
                                <div className="h-48">
                                    <CardBanner src={card?.attributes?.coverImg?.data?.attributes?.url}></CardBanner>
                                </div>
                                <div>
                                    <div className="p-3 xl:p-5">
                                        <CardTitle className="h-10 max-h-10 line-clamp-2">{card?.attributes?.Title}</CardTitle>
                                        <div className="flex gap-3 items-center">
                                            <CardDate>{dateFormate(card?.attributes?.publish_date)}</CardDate>
                                            <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                            <CardTime>{extractAndCalculateReadTime(card)}</CardTime>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    </Slider>
                </div>
            </div>
    );
};
