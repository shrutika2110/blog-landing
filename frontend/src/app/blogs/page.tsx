import BlogList from "./sections/blogList"; // Adjust the path as per your project structure
import type { Metadata } from 'next';

import { BlogService } from "@/service";

const commonTitle = 'Kofuku - Blog Library';
const commonDescription = 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more';

export async function fetchBlogData() {
  try {
    const { data } = await BlogService(); // Assuming BlogService returns the necessary data structure
    const content = data.blogs.data;
    return content;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null; // Handle error gracefully, possibly return a default value or handle in UI
  }
}

export const metadata: Metadata = {
  title: commonTitle,
  description: commonDescription,
  openGraph: {
    title: commonTitle,
    description: commonDescription,
    images: [
      {
        url: "og-image.jpg",
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
        url: "og-image.jpg",
        width: 800,
        height: 600,
      }
    ],
  },
};

export default function Page({ blogsData }: { blogsData: any }) {
  // Ensure blogsData is fetched before rendering the page
  return (
    <div className="relative">
      <div className="container">
        <BlogList blogsData={blogsData} />
      </div>
    </div>
  );
}

// Server-side rendering (SSR) example:
export async function getServerSideProps() {
  const blogsData = await fetchBlogData();

  // Return props to be passed to the Page component
  return {
    props: {
      blogsData,
    },
  };
}