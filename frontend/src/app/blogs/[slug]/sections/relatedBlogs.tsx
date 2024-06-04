import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import extractAndCalculateReadTime from "@/components/utility/calculateReadTime";
import Link from "next/link";
import { formatRelativeDate } from "@/components/utility/formatDateFromNow";

interface Props {
    blogsData?: any;
}

export default function RelatedBlogs({blogsData}:Props) {

    return (
        <>
            {
                blogsData && 
                    <div className="w-full">
                        <div className="xl:columns-2">
                                { blogsData.map((blog:any, index:any) => (
                                    <Link href={'/blogs/' + blog?.attributes?.slug} key={index}>
                                        <Card  className="mb-5"  >
                                            <CardContent className="p-0">
                                                <div className="grid grid-cols-12">
                                                    <div className="col-span-4">
                                                        <CardBanner src={blog?.attributes?.coverImg?.data?.attributes?.url} roundedLeft></CardBanner>
                                                    </div>
                                                    <div className="col-span-8">
                                                        <div className="p-3 xl:p-5">
                                                            <CardTitle className="mb-3">{blog?.attributes?.Title}</CardTitle>
                                                            <div className="flex gap-2 xl:gap-3 items-center">
                                                                <CardDate>{formatRelativeDate(blog?.attributes?.publish_date)}</CardDate>
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
            }
        </>
    );
};
