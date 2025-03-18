"use client";
import { useState, useEffect, use } from "react";
async function getBlog() {
    const res = await fetch("https://67cc4d5bdd7651e464eb918a.mockapi.io/blog");
    // const data = await res.json();
    if (!res.ok) {
      throw new Error('cannot fetch blog')
    }
    return res.json()
  }

export default function Page() {

    const [blogState, setBlogState] = useState([])
    const initBlog = async () =>{
        try{
            const result = await getBlog()
            setBlogState(result)
        }catch(error){
            console.log('error', error)
        }
    }

    useEffect(() => {
        initBlog()
        console.log('useEffect')
    }, [])
    return (
      <div>
        Hello TLE2
        {
        blogState.map((blog, index) =>(
            <div key={index}>
                {blog.id} {blog.name}
            </div>
        )

        )
      }
      </div>
    );
  }
  