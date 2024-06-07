
import HeroTab from "./sections/HeroTab";
import BackToTop from "@/components/utility/backToTop";
import HeroSlider from "./sections/HeroSlider";
import Newsletter from "./sections/newsletter";
import type { Metadata } from 'next'
import { fetchBlogData } from "@/service/blogService";
import { fetchVideoData } from "@/service/videoService";

export const metadata: Metadata = {
  title: 'Kofuku - Home',
  description: 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more',
}

export default async function Page() {

  const blogsData = await fetchBlogData();
  const videosData = await fetchVideoData();

  return (
    <div className="relative ">
      <div className="container">
        <HeroSlider blogsData={blogsData} />
      </div>
      <HeroTab blogsData={blogsData} videosData={videosData} />
      <div className="container relative">
        <Newsletter  page="homepage" />
        <BackToTop /> 
      </div>
    </div>
  );
}

