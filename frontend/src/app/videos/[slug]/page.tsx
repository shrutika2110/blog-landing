import { headers } from "next/headers";
import { SingleVideoService, VideoService } from "@/service";
import Newsletter from "@/app/sections/newsletter";
import HeroSection from "./sections/heroSection";
import type { Metadata } from 'next'
import NullPoint from "@/components/utility/nullPoint";
import RelatedVideos from "./sections/relatedVideos";
import BackToTop from "@/components/utility/backToTop";

export const metadata: Metadata = {
  title: 'Kofuku - Video',
  description: 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more',
}

async function fetchSingleVideoData(slug: string) {
  try {
    const { data } = await SingleVideoService(slug);
    const content = data.youtubes.data;
    return content
  }
  catch (e: any) {
    console.log("error:\n", e.message);
  }
}

async function fetchVideoData() {
  try {
    const { data } = await VideoService();
    const content = data.youtubes.data;
    return content
  }
  catch (e: any) {
    console.log("error:\n", e.message);
  }
}

export default async function Page() {
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    const videoPath = pathname?.split('/videos/')[1];

    const videosData = await fetchVideoData();
    const singleVideoData = await fetchSingleVideoData(videoPath || '');

  return (
    <>
         { singleVideoData && singleVideoData.length ?
                  <div className="pt-5 mt-3 mb-14" >
                        <HeroSection singleVideoData={singleVideoData} />
                        <div className='relative container'>
                          <RelatedVideos videosData={videosData} />
                          <Newsletter />
                          <BackToTop /> 
                      </div>
                  </div>
             : 
             <NullPoint pageUrl={videoPath} />
           } 
      </>
  );
}

