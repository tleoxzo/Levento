import { notFound } from "next/navigation"; // ✅ ใช้ notFound() ถ้า slug ไม่ถูกต้อง

async function getBlogs(slug: string) {
    if (!slug) throw new Error("Slug is required");

    const res = await fetch(`https://67cc4d5bdd7651e464eb918a.mockapi.io/blog/${slug}`);
    // const data = await res.json();
    if (!res.ok) {
      throw new Error('cannot fetch blog')
    }
    return res.json()
  }

   

export default async function Page({ params }:{ params: { slug: string } }){
    const value = await params;
    const blog = await getBlogs(value.slug)
    console.log("ParamS:", value.slug);
    return (
        
            <div className={"bg-gray-100 flex justify-center items-center min-h-screen p-6"}>
                
                <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg mt-15">
                    <div className="flex items-center space-x-4 mb-6">
                        <img src={"https://www.bnk48.com/data/Members/108/s/20250211013950egqvx1.png"} 
                            alt="Author Image" 
                            className="w-12 h-12 rounded-full" />
                        <div>
                            <p className="text-sm font-bold">{blog.name}</p>
                            <p className="text-xs text-gray-400">{blog.job}</p>
                            <p className="text-xs text-gray-500">{blog.date}</p>
                        </div>
                    </div>

                    
                    <h1 className="text-2xl font-bold mb-4">
                        {blog.content}
                    </h1>

                    
                    <p className="text-gray-300 mb-4">
                        {blog.discription}
                    </p>
                    <p className="text-gray-400 mb-4">
                        {blog.discription2}
                    </p>
                    <p className="text-gray-400">
                        {blog.discription}
                    </p>

                    
                    <div className="mt-6">
                        <img src={"https://flowbite.com/docs/images/blog/image-1.jpg"} 
                            alt="Blog Image" 
                            className="rounded-lg" />
                    </div>
                </div>
            </div>
            
    )
}