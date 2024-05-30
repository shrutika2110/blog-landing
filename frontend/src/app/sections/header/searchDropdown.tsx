import { Card, CardBanner, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";


export default function SearchDropdown() {

    const blogPosts = [
        {
            href: '/blogs/vaccines-in-elderly-age',
            title: 'Vaccines in Elderly Age',
            src: '/images/poster.jpeg',
            description: 'A short description about the blog, which is related to your search.'
        },
        {
            href: '/blogs/healthy-eating',
            title: 'Healthy Eating',
            src: '/images/poster.jpeg',
            description: 'Learn about healthy eating habits that can improve your lifestyle.'
        },
        {
            href: '/blogs/exercise-tips',
            title: 'Exercise Tips',
            src: '/images/poster.jpeg',
            description: 'Effective exercise tips for maintaining a healthy body.'
        }
    ];
    

    return (
            <div className="absolute right-0 top-12 w-full min-w-[270px] h-50 overflow-y-auto bg-gray-900 rounded-md shadow-xl py-4 px-2.5">
                <div className="flex flex-col gap-3 py-1">
                        {blogPosts.map((post, index) => (
                            <Link href={post.href} key={index} >
                                <Card className="bg-transparent"  >
                                    <CardContent className="p-0">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-3">
                                                <CardBanner src={post.src}></CardBanner>
                                            </div>
                                            <div className="col-span-9">
                                                <div className="px-3">
                                                    <CardTitle className="min-h-auto h-auto line-clamp-1 text-xs mb-1 font-medium font-overpass leading-3.75">{post.title}</CardTitle>
                                                    <div className="flex gap-3 items-center">
                                                       <CardDescription className="text-xxs font-overpass leading-3.25 line-clamp-2" >{post.description}</CardDescription>
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
