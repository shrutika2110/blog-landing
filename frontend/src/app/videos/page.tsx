

import type { Metadata } from 'next'
import VideoList from "./sections/videoList";
import { fetchVideoData } from "@/service/videoService";

const commonTitle = 'Kofuku - Video Library';
const commonDescription = 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more';


export const metadata: Metadata = {
  title: commonTitle,
  description: commonDescription,
  openGraph: {
    title: commonTitle,
    description: commonDescription,
    images: [
      {
        url: "og-image.jpg",
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
        url: "og-image.jpg",
        width: 800, 
        height: 600,
      }
    ],
  },
}

export default async function Page() {

  const videosData = await fetchVideoData();

  return (
    <div className="relative ">
      <div className="container">
        <VideoList videosData={videosData} />
      </div>
    </div>

  );
}

