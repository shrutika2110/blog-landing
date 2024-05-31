import { Card, CardBanner, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import VideoIframe from "@/components/utility/videoIframe";
import Link from "next/link";

interface Props {
    results?: any;
}


export default function SearchDropdown({results}: Props) {
    return (
            <div className="absolute right-0 top-12 w-full min-w-67.5 min-h-20 max-h-50 overflow-y-auto bg-gray-900 rounded-md shadow-xl py-4 px-2.5">
                <div className="p-4 text-center absolute z-0 w-full">
                Searching...
                </div>
                <div className="flex flex-col gap-3 py-1 relative z-10">
                        {results && results.slice(0, 3).map((post:any, index:any) => (
                            <Link href={(post.type == "youtube" ? "/videos/" : "/blogs/") + post?.attributes?.slug } key={index} >
                                <Card className="bg-gray-900"  >
                                    <CardContent className="p-0">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-3">
                                                {
                                                post.type == "youtube" ? 
                                                <div className="h-11 rounded overflow-hidden">
                                                     <VideoIframe videoId={post?.attributes?.Link} size="xs" coverImg={post?.attributes?.CoverImg?.data?.attributes?.url} />
                                                </div>:
                                                <CardBanner src={post?.attributes?.coverImg?.data?.attributes?.url}></CardBanner> 
                                                }
                                            </div>
                                            <div className="col-span-9">
                                                <div className="px-3">
                                                    <CardTitle className="min-h-auto h-auto line-clamp-1 text-xs mb-1 font-medium font-overpass leading-3.75">
                                                    {post?.attributes?.Title}</CardTitle>
                                                    <div className="flex gap-3 items-center">
                                                       <CardDescription className="text-xxs font-overpass leading-3.25 line-clamp-2" >
                                                       {
                                                            post.type == "youtube" ? 
                                                            post?.attributes?.Description:
                                                            post?.attributes?.shortDes
                                                        }
                                                       </CardDescription>
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
    );
};
