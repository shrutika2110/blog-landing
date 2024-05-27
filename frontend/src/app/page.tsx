
import HeroTab from "./sections/HeroTab";
import Trending from "./sections/trending";
import Videos from "./sections/videos";
import BackToTop from "@/components/utility/backToTop";
import { BlogService } from "@/service";
import HeroSlider from "./sections/HeroSlider";
import Newsletter from "./sections/newsletter";
import Blogs from "./sections/blogs";
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

export default async function Home() {

  const blogsData = await fetchBlogData();

  return (
    <div className="container relative ">
      <div className="min-h-140">
        <HeroSlider blogsData={blogsData} />
      </div>
      <HeroTab />
      <Blogs blogsData={blogsData} />
      <Trending blogsData={blogsData} />
      <Videos />
      <Newsletter />
      <BackToTop />
    </div>

  );
}

