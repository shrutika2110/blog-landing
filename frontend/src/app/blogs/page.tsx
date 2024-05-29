
import { BlogService } from "@/service";
import BlogList from "./sections/blogList";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kofuku - Blog Library',
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

