import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { dateFormate } from "@/lib/helpers";
import extractAndCalculateReadTime from "@/components/utility/calculateReadTime";

interface Props {
    blogsData?: any;
}

export default function RelatedBlogs({blogsData}:Props) {

    const otherBlogs = blogsData && blogsData.slice(0, 6);

    return (
        <div className="w-full mt-10">
                    <div className="lg:columns-2">
                            {otherBlogs && otherBlogs.map((blog:any, index:any) => (
                                <Card key={index} className="mb-5"  >
                                    <CardContent className="p-0">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-4">
                                                <CardBanner src={blog?.attributes?.coverImg?.data?.attributes?.url} roundedLeft></CardBanner>
                                            </div>
                                            <div className="col-span-8">
                                                <div className="p-3 xl:p-5">
                                                    <CardTitle className="mb-3">{blog?.attributes?.Title}</CardTitle>
                                                    <div className="flex gap-3 items-center">
                                                        <CardDate>{dateFormate(blog?.attributes?.publish_date)}</CardDate>
                                                        <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                        <CardTime>{extractAndCalculateReadTime(blog)}</CardTime>
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
