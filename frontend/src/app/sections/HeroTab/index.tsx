'use client'
import { useRef, useState } from 'react';
import { Tabs, TabsList } from "@/components/ui/tabs"
import Link from "next/link";

export default function HeroTab() {
    const [activeTab, setActiveTab] = useState("blogs");
    const blogsRef = useRef(null);
    const videosRef = useRef(null);
    const handleTabClick = (id:any) => {
        setActiveTab(id);
        // scrollToRef(id);
    };

    // const scrollToRef = (id:any) => {
    //     let ref;
    //     if (id === "blogs") {
    //         ref = blogsRef.current;
    //     } else if (id === "videos") {
    //         ref = videosRef.current;
    //     }

    //     if (ref) {
    //         window.scrollTo({
    //             top: ref.offsetTop + 150,
    //             behavior: 'smooth'
    //         });
    //     }
    // };

    return (
        <div className='sticky top-20 z-100 bg-white'>
            <div className='container'>
                <Tabs defaultValue="blogs">
                    <TabsList className="w-full border-b border-offwhite-150">
                        <div className={`tabLink text-sm lg:text-2xl font-bold px-7 py-3 ${activeTab === 'blogs' ? 'text-gray-1300 relative after:absolute after:left-8 after:right-8 after:h-1.5 after:rounded-2xl after:bg-primary after:content-[""] after:-bottom-1' : 'text-black-200'}`} 
                        onClick={() => handleTabClick('blogs')}>
                            {/* <Link href="#blogs" > */}
                                Blogs
                            {/* </Link> */}
                        </div>
                        <div className={`tabLink text-sm lg:text-2xl font-bold px-7 py-3 ${activeTab === 'videos' ? 'text-gray-1300 relative after:absolute after:left-8 after:right-8 after:h-1.5 after:rounded-2xl after:bg-primary after:content-[""] after:-bottom-1' : 'text-black-200'}`} 
                        onClick={() => handleTabClick('videos')}>
                            {/* <Link href="#videos" > */}
                                Videos
                            {/* </Link> */}
                        </div>
                        <div className="text-sm lg:text-2xl font-bold px-7 py-3 text-black-200">
                            <Link href="https://www.kofuku.com/" target="_blank">
                                About us
                            </Link>
                        </div>
                    </TabsList>
                    
                </Tabs>
            </div>
        </div>
    );
};
