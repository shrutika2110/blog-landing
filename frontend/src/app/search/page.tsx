
import { getBlogsAndVideosByTitle } from "@/service";

import type { Metadata } from 'next';
import SearchList from "./sections/searchList";

const commonTitle = 'Kofuku - Search';
const commonDescription = 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more';


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
}


async function fetchSearchData(query:any) {
  try {
      const { data } = await getBlogsAndVideosByTitle(query);
      const blogs = data.blogs.data.map((blog: any) => ({
        ...blog,
        type: "blog",
      }));
      const youtubes = data.youtubes.data.map((video: any) => ({
        ...video,
        type: "youtube",
      }));
      const combinedSearch = [...blogs, ...youtubes].sort(
        (a: any, b: any) =>
          new Date(b.attributes.publishedAt).getTime() -
          new Date(a.attributes.publishedAt).getTime()
      );

    const content = combinedSearch;
    return content
  }
  catch (e: any) {
    console.log("error:\n", e.message);
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: { q: any };
}) {

const query = searchParams.q;

const searchData = await fetchSearchData(query);

  return (
    <div className="relative ">
        <SearchList searchData={searchData} query={query} />
    </div>

  );
}

