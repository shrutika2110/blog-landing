
import { getBlogsAndVideosByTitle } from "@/service";

import type { Metadata } from 'next';
import SearchList from "./sections/searchList";

export const metadata: Metadata = {
  title: 'Kofuku - Search',
  description: 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more',
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
      <div className="container">
        <SearchList searchData={searchData} query={query} />
      </div>
    </div>

  );
}

