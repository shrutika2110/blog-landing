
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Blogs from "./blogs";
import Videos from "./videos";
import Link from "next/link";

export default function HeroTab() {

    return (
            <Tabs defaultValue="blogs">
                <TabsList className="mb-5 w-full border-b border-offwhite-150">
                    <TabsTrigger value="blogs">Blogs</TabsTrigger>
                    <TabsTrigger value="videos">Videos</TabsTrigger>
                    <div className="text-sm lg:text-2xl font-bold px-7 py-1 text-black-200">
                        <Link href="https://kofuku.com/" target="_blank">
                            About us
                        </Link>
                    </div>
                </TabsList>
                <TabsContent value="blogs">
                    <Blogs />
                </TabsContent>
                <TabsContent value="videos">
                    <Videos />
                </TabsContent>
            </Tabs>
    );
};
