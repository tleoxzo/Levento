"use client";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LottoResponse } from "@/components/searchlotto/_config/config"


export default function SearchLottery() {
  // const [searchResult, setSearchResult] = useState<string | null>(null);
  // const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [lotteryData, setLotteryData] = useState<LottoResponse | null>(null);

  // const [lotteryNumbers, setLotteryNumbers] = useState([""]);
  const [periodDate, setPeriodDate] = useState("");

  // const validNumbers = lotteryNumbers.filter(Boolean);
  
  // const dataToSend = {
  //   // number: lotteryNumbers.map(num => ({ lottery_num: num })),
  //   number: validNumbers.map(num => ({ lottery_num: num })),
  //   period_date: periodDate
  // };
  // console.log("ส่งข้อมูล:", dataToSend);

  const availableDates = [
    { label: "1 เมษายน 2568", value: "2025-04-01" },
    { label: "16 มีนาคม 2568", value: "2025-03-16" },
    { label: "1 มีนาคม 2568", value: "2025-03-01" },
    { label: "16 กุมภาพันธ์ 2568", value: "2025-02-16" },
    { label: "1 กุมภาพันธ์ 2568", value: "2025-02-01" },
    { label: "17 มกราคม 2568", value: "2025-01-17" },
    { label: "2 มกราคม 2568", value: "2025-01-02" },
    // เพิ่มวันอื่นๆ ได้ตามต้องการ
  ];

 useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = today.getDate() >= 16 ? "16" : "01";
    const latestPeriod = `${year}-${month}-${day}`;
  
    setPeriodDate(prev => {
      if (prev !== latestPeriod) {
        return latestPeriod;
      }
      return prev;
    });
  }, []); // run once

  const fetchLotteryResults = async (date: string) => {

    const formattedDate = date.split("-"); // แยกปี-เดือน-วัน
    const dataToSend = {
      date: formattedDate[2],  // วันที่
      month: formattedDate[1], // เดือน
      year: formattedDate[0]   // ปี
    };

    console.log("ส่งข้อมูล||:", dataToSend);

    
    try {
      const response = await fetch("/api/lottery", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend)
      });
      // const response = await postdateLotto(dataToSend);

      const data = await response.json();
      console.log("RESULT:", data.response);
      setLotteryData(data.response);
    } catch (error) {
      console.error("Error fetching lottery results:", error);
    }
  };
 
  
  // ✅ ดึงข้อมูลทุกครั้งที่เปลี่ยนงวดวันที่
  useEffect(() => {
    if (periodDate) {
      fetchLotteryResults(periodDate);
    }
  }, [periodDate]);

  // console.log("lotteryData:", lotteryData);
  return (
    <div>
      <Card className="w-full border-none">
      <CardHeader>
        <CardTitle>ผลสลากกินแบ่งรัฐบาล</CardTitle>
      </CardHeader>
      <CardContent className="">
        
           <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
           {/* <Input className="mt-4" type="date" value={periodDate} onChange={(e) => setPeriodDate(e.target.value)} /> */}
           <Select value={periodDate} onValueChange={(value) => setPeriodDate(value)}>
            <SelectTrigger className="mt-4 w-full">
              <SelectValue placeholder="เลือกงวดวันที่" />
            </SelectTrigger>
            <SelectContent>
              {availableDates.map((date) => (
                <SelectItem key={date.value} value={date.value}>
                  {date.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
           <div className="">
                <div className="flex flex-col items-center mt-4">
                    <span className="text-2xl md:text-3xl lg:text-3xl font-bold">ผลสลากกินแบ่งรัฐบาล</span>
                     {/* <span className="text-xs text-red-500">งวดวันที่ {selectedDate}</span>  */}
                </div>
                <div className="flex flex-col items-center mt-4">
                  <div className="flex flex-col items-center">
                    <span className="text-base font-bold text-red-500">รางวัลที่ 1</span>
                    <span className="text-gray-500 text-xs">รางวัลละ 6,000,000 บาท</span>
                  </div>
                  <span className="text-xl font-bold mt-4">{lotteryData?.result?.data?.first?.number?.[0]?.value ?? "XXXXXX"}
                  </span>
                </div>
                 <div className="grid grid-cols-3 mt-4">
                      <div className="flex flex-col items-center mx-5">
                        <span className="text-base font-bold text-red-500">เลขหน้า 3 ตัว</span>
                        <div className="flex flex-col items-center text-xs text-gray-500">
                          <span className="">2 รางวัล</span>
                          <span className="">รางวัลละ 4,000 บาท</span>
                        </div>
                        <div className="flex flex-col items-center mt-4">
                          {Array.from({ length: 2 }).map((_, index1) => (  
                        <span key={index1} className="font-bold">{lotteryData?.result?.data.last3f.number[index1].value ?? "XXX"}</span>
                      ))}
                        </div>
                      </div>
                    <div className="flex flex-col items-center mx-5">
                      <span className="text-base font-bold text-red-500">เลขท้าย 3 ตัว</span>
                      <div className="flex flex-col items-center text-xs text-gray-500">
                        <span className="">2 รางวัล</span>
                        <span className="">รางวัลละ 4,000 บาท</span>
                      </div>
                      <div className="flex flex-col items-center mt-4">
                        {Array.from({ length: 2 }).map((_, index1) => (  
                        <span key={index1} className="font-bold">{lotteryData?.result?.data.last3b.number[index1].value}</span>
                      ))}
                      </div>
                   </div>
                      <div>
                        <div className="flex flex-col items-center mx-5">
                          <span className="text-base font-bold text-red-500">เลขท้าย 2 ตัว</span>
                          <div className="flex flex-col items-center text-xs text-gray-500">
                            <span className="">1 รางวัล</span>
                            <span className="">รางวัลละ 2,000 บาท</span>
                          </div>
                          <p className="font-bold mt-4">{lotteryData?.result?.data.last2.number[0].value}</p>
                        </div>
                      </div>
                  </div>
                  <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
                  <div className="mt-4 flex flex-col items-center">
                    <span className="text-base font-bold text-red-500">รางวัลข้างเคียงรางวัลที่ 1</span>
                    <span className="text-gray-500 text-xs">2 รางวัล รางวัลละ 100,000 บาท</span>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-3 mt-4">
                      {Array.from({ length: 2 }).map((_, index1) => (  
                        <span key={index1} className="font-bold">{lotteryData?.result?.data.second.number[index1].value}</span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
                  <div className="mt-4 flex flex-col items-center">
                    <span className="text-base font-bold text-red-500">รางวัลที่ 2</span>
                    <span className="text-gray-500 text-xs">5 รางวัล รางวัลละ 200,000 บาท</span>
                    <div className="grid grid-cols-3 justify-center pt-2 gap-x-12 gap-y-3">
                      {Array.from({ length: 5 }).map((_, index1) => (  
                        <span key={index1} className="font-bold mx-3 w-full">{lotteryData?.result?.data.second.number[index1].value}</span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
                  <div className="mt-4 flex flex-col items-center">
                    <span className="text-base font-bold text-red-500">รางวัลที่ 3</span>
                    <span className="text-gray-500 text-xs">10 รางวัล รางวัลละ 80,000 บาท</span>
                    <div className="grid grid-cols-3 justify-center pt-2 gap-x-12 gap-y-3">
                      {Array.from({ length: 10 }).map((_, index1) => (  
                        <span key={index1} className="font-bold mx-3 w-full">{lotteryData?.result?.data.third.number[index1].value}</span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
                  <div className="mt-4 flex flex-col items-center">
                    <span className="text-base font-bold text-red-500">รางวัลที่ 4</span>
                    <span className="text-gray-500 text-xs">50 รางวัล รางวัลละ 40,000 บาท</span>
                    <div className="grid grid-cols-3 justify-center pt-2 gap-x-12 gap-y-3">
                      {Array.from({ length: 50 }).map((_, index1) => (  
                        <span key={index1} className="font-bold mx-3 w-full">{lotteryData?.result?.data.fourth.number[index1].value}</span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
                  <div className="mt-4 flex flex-col items-center">
                    <span className="text-base font-bold text-red-500">รางวัลที่ 5</span>
                    <span className="text-gray-500 text-xs">100 รางวัล รางวัลละ 20,000 บาท</span>
                    <div className="grid grid-cols-3 justify-center pt-2 gap-x-12 gap-y-3">
                      {Array.from({ length: 100 }).map((_, index1) => (  
                        <span key={index1} className="font-bold mx-3 w-full">{lotteryData?.result?.data.fifth.number[index1].value}</span>
                      ))}
                    </div>
                  </div> 
                </div>
        
      </CardContent>
    </Card>
    </div>
  );
}
