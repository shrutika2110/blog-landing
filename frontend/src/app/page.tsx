
'use client'

import { BlogService } from "@/service";
import HeroSlider from "./sections/HeroSlider";
import HeroTab from "./sections/HeroTab";
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [blogsData, setBlogsData] = useState<any>("");

  let blogsCategories;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await BlogService();

        const content = data.blogs.data;
        blogsCategories = content;
        setBlogsData(content);

      } catch (error) {
        console.log('error');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container  ">
      <div className="min-h-120">
        <HeroSlider blogsData={blogsData} />
      </div>
      <HeroTab />

     

    </div>

  );
}

