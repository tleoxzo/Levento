import { getposts } from "@/lib/queiex";
import { Card ,CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from 'react';
import Image from 'next/image';

export default async function Blog(){
    const posts = await getposts(); // ดึงข้อมูลโพสต์จาก API
    // console.log("API posts:", posts); // แสดงข้อมูลใน console
    // const posts = data;
    // console.log("API:", posts); // แสดงข้อมูลใน console

    return (
        <div className="">
        <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 px-4 py-2 rounded-xl text-black font-bold text-lg mb-8 text-center shadow-lg">
          บทความน่าสนใจ
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link href={`/blog/${post.id}`} key={index} className="group">
             <Card className="rounded-b-xl overflow-hidden shadow-lg bg-yellow-300 border-none p-0 m-0">
                <div className="w-full h-48 overflow-hidden">
                    <Image
                    src={post.rttpg_featured_image_url.full[0]}
                    alt="Post Image"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                </div>

                <CardContent className="flex flex-col justify-between h-full p-4">
                    <div>
                    <span className="text-orange-500 text-xs font-bold uppercase">หมวดหมู่</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">{post.title.rendered}</h3>
                    <div
                        className="text-gray-600 text-sm mt-1"
                        dangerouslySetInnerHTML={{ __html: post.rttpg_excerpt }}
                    />
                    </div>
                </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    )
}