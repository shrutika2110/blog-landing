
import { BlogService } from "@/service";
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
        <Blogs blogsData={blogsData} />
      </div>
    </div>

  );
}

