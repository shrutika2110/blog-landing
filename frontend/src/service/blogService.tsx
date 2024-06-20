import cmsClient from "./smsClient";

export async function fetchBlogData() {
  try {

    const { data } = await BlogService();
    const content = data.blogs.data;
    return content
  }
  catch (e: any) {
    console.log("error:\n", e.message);

  }
}
