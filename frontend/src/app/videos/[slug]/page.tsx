import { headers } from "next/headers";
import { SingleVideoService } from "@/service";
import Newsletter from "@/app/sections/newsletter";
import HeroSection from "./sections/heroSection";
import type { Metadata } from 'next'
import NullPoint from "@/components/utility/nullPoint";
import RelatedVideos from "./sections/relatedVideos";
import BackToTop from "@/components/utility/backToTop";
import { fetchVideoData } from "@/service/videoService";


export async function generateMetadata(): Promise<Metadata> {

  const commonTitle = 'Kofuku - Video';
  const commonDescription = 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more';

  // Fetch data
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const blogPath = pathname?.split('/blogs/')[1];
  const singleVideoData = await fetchSingleVideoData(blogPath || '');

  if (!singleVideoData || singleVideoData.length === 0) {
    return {
      metadataBase: new URL(`${process.env.NEXT_BASE_PATH}`),
      title: commonTitle,
      description: commonDescription,
      openGraph: {
        title: commonTitle,
        description: commonDescription,
        images: [
          {
            url: "/og-image.jpg",
            width: 800, 
            height: 600,
          }
        ],
      },
      twitter: {
        title: commonTitle,
        description: commonDescription,
        images: [
          {
            url: "/og-image.jpg",
            width: 800, 
            height: 600,
          }
        ],
      },
    }
  }

  return {
    title: singleVideoData[0]?.attributes?.Title,
    description: singleVideoData[0]?.attributes?.shortDes,
    openGraph: {
      title: singleVideoData[0]?.attributes?.Title,
      description: singleVideoData[0]?.attributes?.shortDes,
      images: [
        {
          url:  singleVideoData[0]?.attributes?.coverImg?.data?.attributes?.url,
          width: 800, 
          height: 600, 
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [{
        url: singleVideoData[0]?.attributes?.coverImg?.data?.attributes?.url,
        width: 800, 
        height: 600, 
      }],
      title: singleVideoData[0]?.attributes?.Title,
      description: singleVideoData[0]?.attributes?.shortDes,
    },

  }
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
                          <Newsletter page="singleVideoPage"/>
                          <BackToTop /> 
                      </div>
                  </div>
             : 
             <NullPoint pageUrl={videoPath} />
           } 
      </>
  );
}

