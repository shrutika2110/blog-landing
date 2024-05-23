
import Heading from "@/components/composite/Heading";
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import Slider from "react-slick";

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
    },
    {
        src: "/images/blogs/blog2.svg",
        title: "Hypertension- causes, complications and cure space for longer text",
        date: "2 days ago",
        time: "3 min"
    }
];

export default function Trending() {

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

    return (
            <div className="my-5">
                <Heading level={3} className="text-skyBlue-150 md:text-base xl:text-2xl font-extrabold">
                    Trending
                </Heading>
                <div className="my-5">
                <Slider {...settings}>
                    {cardData.map((card, index) => (
                        <Card key={index} >
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
                                            <CardTime>{card.time}</CardTime>
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
