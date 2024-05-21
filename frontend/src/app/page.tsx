
'use client'

import { BlogService } from "@/service";
import HeroSlider from "./sections/HeroSlider";
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    <div className="container  min-h-120">
      <HeroSlider blogsData={blogsData} />
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

    </div>

  );
}

