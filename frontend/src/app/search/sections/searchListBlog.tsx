import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import extractAndCalculateReadTime from "@/components/utility/calculateReadTime";
import { formatRelativeDate } from "@/components/utility/formatDateFromNow";
import Link from "next/link";

interface Props {
    post?: any;
}


export default function SearchListBlog({post}: Props) {
    return (
        <Link href={"/blogs/" + post?.attributes?.slug } >
            <Card className="bg-gray-700 "  >
                <CardContent className="p-0 ">
                    <div className="grid grid-cols-12 min-h-35 lg:min-h-50" >
                        <div className="col-span-4">
                            <CardBanner src={post?.attributes?.coverImg?.data?.attributes?.url} roundedLeft></CardBanner> 
                        </div>
                        <div className="col-span-8">
                            <div className="flex items-center h-full">
                                <div className="p-3 xl:p-5 ">
                                    <CardTitle className="mb-3 lg:mb-6 h-22 max-h-22 xl:leading-11" size="lg">{post?.attributes?.Title}</CardTitle>
                                    <div className="flex gap-2 xl:gap-3 items-center">
                                        <CardDate>{formatRelativeDate(post?.attributes?.publishedAt)}</CardDate>
                                        <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                        <CardTime>{extractAndCalculateReadTime(post)}</CardTime>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
                </Card>
            </Link>
                           
    );
};
