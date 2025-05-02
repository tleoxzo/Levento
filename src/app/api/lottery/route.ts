import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if(req.method === "POST"){
    try {
      const body = await req.json();
      const { date, month, year } = body;
      const response = await fetch("https://www.glo.or.th/api/checking/getLotteryResult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, month, year })
      });
       

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(body);
      return NextResponse.json(data);
    } catch (error) {
      console.error("เกิดข้อผิดพลาดขณะดึงข้อมูล:", error);
      return NextResponse.json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูล" }, { status: 500 });
    }
  }else{
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}
