
import { BlogService } from "@/service";
import BlogList from "./sections/blogList";

import type { Metadata } from 'next'

const commonTitle = 'Kofuku - Blog Library';
const commonDescription = 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more';

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



export const metadata: Metadata = {
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
export const dynamic = "force-dynamic";
export const revalidate = 0;
export default async function Page() {

  const blogsData = await fetchBlogData();

  return (
    <div className="relative ">
      <div className="container">
        <BlogList blogsData={blogsData} />
      </div>
    </div>

  );
}

