
import HeroSlider from "./sections/HeroSlider";
import HeroTab from "./sections/HeroTab";
import Trending from "./sections/trending";
import Videos from "./sections/videos";
import BackToTop from "@/components/utility/backToTop";
import Newsletter from "./sections/newsletter";
import { BlogService } from "@/service";

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
      <Trending />
      <Videos />
      <Newsletter />
      <BackToTop /> 
    </div>

  );
}

