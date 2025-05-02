import { Post } from "@/lib/type";
import { Lottolist } from "@/components/searchlotto/_config/config"; 

const baseUrl= process.env.WORDPRESS_URL;

export async function getposts(): Promise<Post[]> {
    const res = await fetch(`${baseUrl}/wp-json/wp/v2/posts?categories=5&per_page=6`);
    const data = await res.json();
    // console.log("API Response:", data);
    return data;
}; 

export type LottoRequest = {
    date: string;
    month: string;
    year: string;
  };

export async function postdateLotto({ date, month, year }: LottoRequest): Promise<Lottolist[]> {
    const res = await fetch(`https://www.glo.or.th/api/checking/getLotteryResult`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, month, year })
    });
    
    const data = await res.json();
    console.log("API Lotto:", data);
    return data;
}; 
