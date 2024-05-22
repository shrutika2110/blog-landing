
'use client'

import { BlogService } from "@/service";
import HeroSlider from "./sections/heroSlider";
import HeroTab from "./sections/heroTab";
import React, { useEffect, useState } from 'react';
import Trending from "./sections/trending";
import Videos from "./sections/videos";

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
      <Trending />
      <Videos />
    </div>

  );
}

