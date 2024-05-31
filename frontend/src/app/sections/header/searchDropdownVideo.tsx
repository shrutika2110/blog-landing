import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import VideoIframe from "@/components/utility/videoIframe";
import Link from "next/link";

interface Props {
    post?: any;
}

export default function SearchDropdownVideo({post}: Props) {
    return (
        <Card className="bg-gray-900" >
                <CardContent className="p-0">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">
                            <div className="h-11 rounded overflow-hidden">
                                <VideoIframe videoId={post?.attributes?.Link} size="xs" coverImg={post?.attributes?.CoverImg?.data?.attributes?.url} />
                            </div>
                        </div>
                        <div className="col-span-9">
                        <Link href={"/videos/" + post?.attributes?.slug }  >
                            <div className="px-3">
                                <CardTitle className="min-h-auto h-auto line-clamp-1 text-xs mb-1 font-medium font-overpass leading-3.75">
                                {post?.attributes?.Title}</CardTitle>
                                <div className="flex gap-3 items-center">
                                <CardDescription className="text-xxs font-overpass leading-3.25 line-clamp-2" >
                                { post?.attributes?.Description }
                                </CardDescription>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
                           
    );
};
