import React from 'react';
import { Post } from "@/lib/type";
import { HeaderApp } from "@/components/layout/header/header-app";

const baseUrl= process.env.WORDPRESS_URL;
async function getBlogs(id: number){
  const res = await fetch(`${baseUrl}/wp-json/wp/v2/posts/${id}`);
  // console.log("API Response:", res);
  if (!res.ok) {
    throw new Error('cannot fetch blog')
  }
  return res.json()
}
type tParams = Promise<{ id: number }>;

export default async function Blog({ params }:{ params: tParams }){
    const {id} = await params;
    const blog:Post = await getBlogs(id);
    // console.log("API:", blog); // แสดงข้อมูลใน console
    // const safeHtml = DOMPurify.sanitize(blog.content);
  return (
    <> 
    <HeaderApp />
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
    <div className="max-w-3xl p-8 rounded-lg shadow-xl">
      <h1 className="mb-4 text-3xl text-center"><b>{blog.title.rendered}</b></h1>
      {/* <div className="flex items-center space-x-4 mb-6">
          <img src={"https://www.bnk48.com/data/Members/108/s/20250211013950egqvx1.png"} 
              alt="Author Image" 
              className="w-12 h-12 rounded-full" />
          <div>
              <p className="text-sm font-bold">Admin</p>
              <p className="text-xs text-gray-500">24/5/2025</p>
          </div> 
      </div>*/}
      {/* {blog.content} */}
      <div dangerouslySetInnerHTML={{ __html: blog.content.rendered || "" }} />
      </div>
    </div>
    </>
  )
}