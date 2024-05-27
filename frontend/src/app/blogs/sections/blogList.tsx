import Heading from "@/components/composite/Heading";
import { Card, CardBanner, CardContent, CardDate, CardTime, CardTitle } from "@/components/ui/card";
import { dateFormate } from "@/lib/helpers";
import extractAndCalculateReadTime from "@/components/utility/calculateReadTime";

interface Props {
    blogsData?: any;
}

export default function BlogList({blogsData}: any) {

    const allBlogs = blogsData && blogsData
    .filter((data: any) => data?.attributes?.trending)
    .sort(
      (a: any, b: any) =>
        new Date(b.attributes?.publish_date).getTime() -
        new Date(a.attributes?.publish_date).getTime(),
    ).slice(0, 9)


    return (
        <div id="blogs">
            <div className="pt-5 mt-3" >
                <Heading level={3} className="text-primary md:text-base xl:text-2xl font-extrabold">
                    Blogs
                </Heading>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 mt-5 mb-7">
                            {allBlogs && allBlogs.map((blog:any, index:any) => (
                                <Card key={index} >
                                <CardContent className="p-0">
                                    <div className="h-48">
                                        <CardBanner src={blog?.attributes?.coverImg?.data?.attributes?.url}></CardBanner>
                                    </div>
                                    <div>
                                        <div className="p-3 xl:p-5">
                                            <CardTitle>{blog?.attributes?.Title}</CardTitle>
                                            <div className="flex gap-3 items-center">
                                                <CardDate>{dateFormate(blog?.attributes?.publish_date)}</CardDate>
                                                <div className="h-1 w-1 bg-gray-350 rounded-full"></div>
                                                <CardTime>{extractAndCalculateReadTime(blog)}</CardTime>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            ))}
                        

                </div>
            </div>
        </div>
    );
};
