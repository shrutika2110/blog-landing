'use client'
import React, { useRef, useState } from 'react';
import { Tabs, TabsList } from "@/components/ui/tabs"
import Link from "next/link";
import Blogs from '../blogs';
import Videos from '../videos';

interface Props {
    blogsData?: any;
    videosData ?:any
}

export default function HeroTab({blogsData, videosData}: any) {
   
    const blogsRef = useRef<HTMLDivElement>(null);
    const videosRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<'blogs' | 'videos'>('blogs');

    const handleTabClick = (tab: 'blogs' | 'videos') => {
        setActiveTab(tab);
        if (tab === 'blogs' && blogsRef.current) {
            scrollToRef(blogsRef);
        } else if (tab === 'videos' && videosRef.current) {
            scrollToRef(videosRef);
        }
    };

    // Function to scroll to a specific ref, considering the header height
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const stickyHeight = 50;
            window.scrollTo({
                top: ref.current.offsetTop - stickyHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className='sticky top-20 z-90 bg-white'>
                <div className='container'>
                    <Tabs defaultValue="blogs">
                        <TabsList className="w-full border-b border-offwhite-150">
                            <div className={`tabLink text-sm lg:text-2xl font-bold px-7 py-3 cursor-pointer ${activeTab === 'blogs' ? 'text-gray-1300 relative after:absolute after:left-8 after:right-8 after:h-1.5 after:rounded-2xl after:bg-primary after:content-[""] after:-bottom-1' : 'text-black-200'}`} 
                            onClick={() => handleTabClick('blogs')}>
                                Blogs
                            </div>
                            <div className={`tabLink text-sm lg:text-2xl font-bold px-7 py-3 cursor-pointer ${activeTab === 'videos' ? 'text-gray-1300 relative after:absolute after:left-8 after:right-8 after:h-1.5 after:rounded-2xl after:bg-primary after:content-[""] after:-bottom-1' : 'text-black-200'}`} 
                            onClick={() => handleTabClick('videos')}>
                                Videos
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
            <div className='container'>
                <div ref={blogsRef}>
                    <Blogs blogsData={blogsData} />
                </div>
                <div  ref={videosRef}>
                    <Videos  videosData={videosData} />
                </div>
            </div>
         </>
    );
};
