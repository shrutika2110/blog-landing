import { WebsiteBlog } from "@/service";

export async function fetchBlogData() {
    try {
        const { data } = await WebsiteBlog();
        const content = data.blogWebistes.data;
        return content
    }
    catch (e: any) {
        console.log("error:\n", e.message);
    }
}
