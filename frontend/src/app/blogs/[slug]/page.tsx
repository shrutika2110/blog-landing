import { headers } from "next/headers";
import { BlogService, SingleBlogService } from "@/service";
import Newsletter from "@/app/sections/newsletter";
import Blogs from "./sections/blogs";
import FoldDescription from "./sections/foldDescription";
import HeroSection from "./sections/heroSection";

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

async function fetchSingleBlogData(slug: string) {
  try {
    const { data } = await SingleBlogService(slug);
    const content = data.blogs.data;
    return content
  }
  catch (e: any) {
    console.log("error:\n", e.message);
  }
}

export default async function Page() {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const blogPath = pathname?.split('/blogs/')[1];

    const blogsData = await fetchBlogData();
    const singleBlogData = await fetchSingleBlogData(blogPath || '');
    const firstFoldDetails = singleBlogData && singleBlogData[0]?.attributes?.firstFold
    const secFoldDetails = singleBlogData && singleBlogData[0]?.attributes?.secondFold

  return (
    <div className='container'>
          <div className="pt-5 mt-3 mb-14" >
                <HeroSection singleBlogData={singleBlogData} />
                <FoldDescription foldDetails={firstFoldDetails} />
                <Blogs blogsData={blogsData} />
                <FoldDescription foldDetails={secFoldDetails} />
                <Blogs blogsData={blogsData} />
                <Newsletter />
            </div>
    </div>
  );
}

