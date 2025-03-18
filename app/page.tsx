import Link from "next/link";

async function getBlog() {
  const res = await fetch("https://67cc4d5bdd7651e464eb918a.mockapi.io/blog");
  // const data = await res.json();
  if (!res.ok) {
    throw new Error('cannot fetch blog')
  }
  return res.json()
}

export default async function Home() {
  const blogs = await getBlog()
//   console.log(blogs)z
  return (
    <div className="flex gap-5 flex-wrap justify-center bg-gray-100 pt-25 py-10 ">
      {
        blogs.map((blog, index) =>(
            <div key={index} className={"max-w-sm border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg"}>
                <div>
                  <img className={"rounded-t-lg"} src={"https://flowbite.com/docs/images/blog/image-1.jpg"} alt="aaa" />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.name}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.content}</p>
                  <Link href={`/blog/${blog.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    อ่านบทความ
                  </Link>
                </div>
            </div> 
        )

        )
      }
    </div>
  );
}