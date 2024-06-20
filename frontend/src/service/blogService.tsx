// import { BlogService } from "@/service";

// export async function fetchBlogData() {
//   try {

//     const { data } = await BlogService();
//     const content = data.blogs.data;
//     return content
//   }
//   catch (e: any) {
//     console.log("error:\n", e.message);

//   }
// }


import { debounce } from "lodash";
import { BlogService } from "@/service";

export async function fetchBlogData() {
  try {
    const { data } = await BlogService();
    const content = data.blogs.data;
    return content;
  } catch (e: any) {
    console.log("error:\n", e.message);
  }
}

// Debounced version of fetchBlogData with a wait time of 300 milliseconds
export const debouncedFetchBlogData = debounce(fetchBlogData, 300);

// Usage example
// You can call debouncedFetchBlogData() multiple times, but the actual fetchBlogData
// will only be called once every 300 milliseconds.
debouncedFetchBlogData();