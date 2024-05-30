
import { VideoService } from "@/service";

import type { Metadata } from 'next'
import VideoList from "./sections/videoList";

export const metadata: Metadata = {
  title: 'Kofuku - Video Library',
  description: 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more',
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

  const videosData = await fetchVideoData();

  return (
    <div className="relative ">
      <div className="container">
        <VideoList videosData={videosData} />
      </div>
    </div>

  );
}

