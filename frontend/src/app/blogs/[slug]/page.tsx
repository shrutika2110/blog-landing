
import Newsletter from '@/app/sections/newsletter';
import { BlogService } from '@/service';
import fetchAPI from '@/service/api';
import Blogs from './sections/blogs';
import HeroSection from './sections/heroSection';

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

export default async function Page({ blogDetails, blogsList, randomBlogs }: any) {

  const blogsData = await fetchBlogData();

  return (
    <div className='container'>
        <HeroSection />
        <Blogs blogsData={blogsData} />
        <Newsletter />
    </div>
  );
}

