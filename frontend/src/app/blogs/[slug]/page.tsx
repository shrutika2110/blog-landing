import { headers } from "next/headers";
import { SingleBlogService } from "@/service";
import Newsletter from "@/app/sections/newsletter";
import FoldDescription from "./sections/foldDescription";
import HeroSection from "./sections/heroSection";
import type { Metadata } from 'next'
import FirstFoldBlogs from "./sections/firstFoldBlogs";
import SecFoldBlogs from "./sections/secFoldBlogs";
import NullPoint from "@/components/utility/nullPoint";
import { fetchBlogData } from "@/service/blogService";
import { fetchRecommendedBlogData } from "@/service/recommendedBlog";


export async function generateMetadata(): Promise<Metadata> {

  // Fetch data
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const blogPath = pathname?.split('/blogs/')[1];
  const singleBlogData = await fetchSingleBlogData(blogPath || '');
  const commonTitle = 'Kofuku - Blog';
  const commonDescription = 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more';


  if (!singleBlogData || singleBlogData.length === 0) {
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
    title: singleBlogData[0]?.attributes?.Title,
    description: singleBlogData[0]?.attributes?.shortDes,
    openGraph: {
      title: singleBlogData[0]?.attributes?.Title,
      description: singleBlogData[0]?.attributes?.shortDes,
      images: [
        {
          url: singleBlogData[0]?.attributes?.coverImg?.data?.attributes?.url,
          width: 800, // Replace with the actual width of the image
          height: 600, // Replace with the actual height of the image
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [{
        url: singleBlogData[0]?.attributes?.coverImg?.data?.attributes?.url,
        width: 800, // Replace with the actual width of the image
        height: 600, // Replace with the actual height of the image
      }],
      title: singleBlogData[0]?.attributes?.Title,
      description: singleBlogData[0]?.attributes?.shortDes,
    },

  }
}

async function fetchSingleBlogData(slug: string) {
  try {
    const { data } = await SingleBlogService(slug);
    return data.blogs.data;
  } catch (e: any) {
    console.error("Error fetching single blog data:", e.message);
    return [];
  }
}

export default async function Page() {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const blogPath = pathname?.split('/blogs/')[1];

  const blogsData = await fetchBlogData();
  const singleBlogData = await fetchSingleBlogData(blogPath || '');

  const firstFoldDetails = singleBlogData?.[0]?.attributes?.firstFold;
  const secFoldDetails = singleBlogData?.[0]?.attributes?.secondFold;
  const thirdFoldDetails = singleBlogData?.[0]?.attributes?.thirdFold;
  const fourthFoldDetails = singleBlogData?.[0]?.attributes?.fourthFold;
  const fifthFoldDetails = singleBlogData?.[0]?.attributes?.fifthFold;
  const sixthFoldDetails = singleBlogData?.[0]?.attributes?.sixthFold;
  const seventhFoldDetails = singleBlogData?.[0]?.attributes?.seventhFold;



  const metadata: any = await generateMetadata();

  const recommendedData = await fetchRecommendedBlogData();
  const recommendedBlogIds = singleBlogData[0]?.attributes?.RecomendedBlog?.blogs?.data.map((blog: any) => blog.id) || [];

  const filteredRecommendedBlogs = recommendedData.filter((blog: any) => recommendedBlogIds.includes(blog.id));



  return (
    <>
      {singleBlogData.length ?
        <div className='container'>
          <div className="pt-5 mt-3 mb-14" >
            <HeroSection singleBlogData={singleBlogData} />
            {firstFoldDetails && <FoldDescription foldDetails={firstFoldDetails} />}
            <FirstFoldBlogs blogsData={filteredRecommendedBlogs} />
            {secFoldDetails && <FoldDescription foldDetails={secFoldDetails} />}
            <SecFoldBlogs blogsData={filteredRecommendedBlogs} />
            {thirdFoldDetails && <FoldDescription foldDetails={thirdFoldDetails} />}
            {fourthFoldDetails && <FoldDescription foldDetails={fourthFoldDetails} />}
            {fifthFoldDetails && <FoldDescription foldDetails={fifthFoldDetails} />}
            {sixthFoldDetails && <FoldDescription foldDetails={sixthFoldDetails} />}
            {seventhFoldDetails && <FoldDescription foldDetails={seventhFoldDetails} foldName="seventh" />}
            <Newsletter page="singleBlogPage" />
          </div>
        </div>
        :
        <NullPoint pageUrl={blogPath} />
      }
    </>
  );
}