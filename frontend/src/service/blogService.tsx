import cmsClient from "./smsClient";
import { BlogService } from "@/service";

export async function fetchBlogData() {
  try {
    await cmsClient.clearStore();

    const { data } = await BlogService();
    const content = data.blogs.data;
    return content
  }
  catch (e: any) {
    console.log("error:\n", e.message);
    return null;

  }
}
