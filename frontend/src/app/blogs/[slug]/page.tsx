import { headers } from "next/headers";
import { BlogService, SingleBlogService } from "@/service";
import Newsletter from "@/app/sections/newsletter";
import FoldDescription from "./sections/foldDescription";
import HeroSection from "./sections/heroSection";
import type { Metadata } from 'next'
import FirstFoldBlogs from "./sections/firstFoldBlogs";
import SecFoldBlogs from "./sections/secFoldBlogs";
import NullPoint from "@/components/utility/nullPoint";
import { fetchBlogData } from "@/service/blogService";

export const metadata: Metadata = {
  title: 'Kofuku - Blog',
  description: 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more',
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
    const thirdFoldDetails = singleBlogData && singleBlogData[0]?.attributes?.thirdFold
    const fourthFoldDetails = singleBlogData && singleBlogData[0]?.attributes?.fourthFold
    const fifthFoldDetails = singleBlogData && singleBlogData[0]?.attributes?.fifthFold
    const sixthFoldDetails = singleBlogData && singleBlogData[0]?.attributes?.sixthFold
    const seventhFoldDetails = singleBlogData && singleBlogData[0]?.attributes?.seventhFold

  return (
    <>
        { singleBlogData.length ?
            <div className='container'>

                  <div className="pt-5 mt-3 mb-14" >
                        <HeroSection singleBlogData={singleBlogData} />
                        {firstFoldDetails && <FoldDescription foldDetails={firstFoldDetails} />}
                        <FirstFoldBlogs blogsData={blogsData} />
                        {secFoldDetails && <FoldDescription foldDetails={secFoldDetails} />}
                        <SecFoldBlogs blogsData={blogsData} />
                        {thirdFoldDetails && <FoldDescription foldDetails={thirdFoldDetails} />}
                        {fourthFoldDetails && <FoldDescription foldDetails={fourthFoldDetails} />}
                        {fifthFoldDetails && <FoldDescription foldDetails={fifthFoldDetails} />}
                        {sixthFoldDetails && <FoldDescription foldDetails={sixthFoldDetails} />}
                        {seventhFoldDetails && <FoldDescription foldDetails={seventhFoldDetails} />}

                        <Newsletter page="singleBlogPage" />
                    </div>
            </div>

            : 
            <NullPoint pageUrl={blogPath} />
        }
      </>
  );
}

