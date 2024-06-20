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


import { BlogService } from "@/service";
import fs from 'fs';
import path from 'path';

// Function to fetch blog data
export async function fetchBlogData() {
  try {
    const { data } = await BlogService();
    const content = data.blogs.data;
    return content;
  } catch (e: any) {
    // console.log("Error fetching blog data:\n", e.message);
    throw e; // Re-throw the error if needed
  }
}

// Function to delete the .next folder
function deleteNextFolder() {
  const nextFolderPath = path.resolve(__dirname, '.next');

  // Check if .next folder exists
  if (fs.existsSync(nextFolderPath)) {
    try {
      // Delete the .next folder recursively
      fs.rmdirSync(nextFolderPath, { recursive: true });
      // console.log('.next folder deleted successfully.');
    } catch (err) {
      // console.error('Error deleting .next folder:', err);
    }
  } else {
    // console.log('.next folder does not exist.');
  }
}

// Periodically refresh data and delete .next folder
setInterval(async () => {
  try {
    // Fetch blog data
    const content = await fetchBlogData();
    // console.log('Fetched new blog data:', content);

    // Delete .next folder
    deleteNextFolder();
  } catch (error) {
    console.error('Error in periodic data refresh:', error);
  }
}, 2000); // Refresh every 2 seconds (2000 milliseconds)