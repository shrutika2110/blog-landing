
import HeroTab from "./sections/HeroTab";
import BackToTop from "@/components/utility/backToTop";
import { BlogService, VideoService } from "@/service";
import HeroSlider from "./sections/HeroSlider";
import Newsletter from "./sections/newsletter";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kofuku - landing',
  description: 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more',
}

async function fetchBlogData() {
  try {
    const { data } = await BlogService();
    const content = data.blogs.data;
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

  const blogsData = await fetchBlogData();
  const videosData = await fetchVideoData();

  return (
    <div className="relative ">
      <div className="container">
        <div className="min-h-140">
          <HeroSlider blogsData={blogsData} />
        </div>
      </div>
      <HeroTab blogsData={blogsData} videosData={videosData} />
      <div className="container relative">
        <Newsletter />
        <BackToTop /> 
      </div>
    </div>
  );
}

