import { fetchBlogData } from "@/service/blogWebsiteService";
import MarkdownRenderer from "./MarkdownRenderer"

// Define the Page component
export default async function Page() {
    // Fetch the blog data
    const blogsData = await fetchBlogData();

    // Render the blog titles
    return (
        <div className="relative">
            {blogsData && blogsData.length > 0 ? (
                blogsData.map((blog: any, index: any) => (
                    <div key={index}>
                        <h2>{blog.attributes.Title}</h2>
                        <MarkdownRenderer content={blog.attributes.Description} />

                    </div>
                ))
            ) : (
                <p>No blog data found</p>
            )}
        </div>
    );
}