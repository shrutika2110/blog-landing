import { Card, CardBanner, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Props {
    post?: any;
}

export default function SearchDropdownBlog({post}: Props) {
    return (
            <Link href={ "/blogs/" + post?.attributes?.slug } >
                        <Card className="bg-gray-900"  >
                            <CardContent className="p-0">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-3">
                                            <CardBanner src={post?.attributes?.coverImg?.data?.attributes?.url} className="rounded"></CardBanner> 
                                    </div>
                                    <div className="col-span-9">
                                        <div className="px-3">
                                            <CardTitle className="min-h-auto h-auto line-clamp-1 text-xs mb-1 font-medium font-overpass leading-3.75">
                                            {post?.attributes?.Title}</CardTitle>
                                            <div className="flex gap-2 xl:gap-3 items-center">
                                                <CardDescription className="text-xxs font-overpass leading-3.25 line-clamp-2" >
                                                {post?.attributes?.shortDes}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </CardContent>
                    </Card>
            </Link>
                           
    );
};
