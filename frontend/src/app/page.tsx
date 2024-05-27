
import HeroTab from "./sections/HeroTab";
import Trending from "./sections/trending";
import Videos from "./sections/videos";
import BackToTop from "@/components/utility/backToTop";
import { BlogService } from "@/service";
import HeroSlider from "./sections/HeroSlider";
import Newsletter from "./sections/newsletter";
import Blogs from "./sections/blogs";

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

export default async function Page() {

  const blogsData = await fetchBlogData();

  return (
    <div className="relative ">
      <div className="container">
        <div className="min-h-140">
          <HeroSlider blogsData={blogsData} />
        </div>
      </div>
      <HeroTab blogsData={blogsData} />
      <div className="container relative">
        <Newsletter />
        <BackToTop /> 
      </div>
    </div>

  );
}

