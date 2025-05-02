// "use client";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { postdateLotto } from "@/lib/queiex";


// export default function SearchLottery() {
//   const [searchResult, setSearchResult] = useState<string | null>(null);
//   // const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
//   const [lotteryData, setLotteryData] = useState<any>(null);
//   const [lotteryNumbers, setLotteryNumbers] = useState([""]);
//   const [periodDate, setPeriodDate] = useState("");

//   const validNumbers = lotteryNumbers.filter(Boolean);
//   // ฟังก์ชันอัปเดตค่าหมายเลขล็อตเตอรี่
//   // const handleLotteryChange = (index: number, value: string) => {
//   //   if (/^\d*$/.test(value) && value.length <= 6) {  // รับแค่ตัวเลข และไม่เกิน 6 หลัก
//   //     const updatedNumbers = [...numbers];
//   //     updatedNumbers[index] = value;
//   //     setNumbers(updatedNumbers);
//   //   }
//   // };
//   const handleAddField = () => {
//     if (lotteryNumbers.length < 3) {
//       setLotteryNumbers([...lotteryNumbers, ""]);
//     }
//   };

//   const handleRemoveField = (index : number) => {
//     const updatedNumbers = lotteryNumbers.filter((_, i) => i !== index);
//     setLotteryNumbers(updatedNumbers);
//   };
  
//     const handleLotteryChange = (index: number, value: string) => {
//       if (/^\d*$/.test(value) && value.length <= 6) {
//         const updatedNumbers = [...lotteryNumbers];
//         updatedNumbers[index] = value;
//         setLotteryNumbers(updatedNumbers);
//       }
//   };
//   // const handleDateChange = (e) => {
//   //   setPeriodDate(e.target.value);
//   // };
//   const handleDateChange = (e : React.ChangeEvent<HTMLInputElement>) => {
//     const selectedDate = new Date(e.target.value);
//     const year = selectedDate.getFullYear();
//     const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
//     let day = selectedDate.getDate() >= 16 ? "16" : "01"; // บังคับให้เป็น 1 หรือ 16
  
//     const fixedDate = `${year}-${month}-${day}`;
//     setPeriodDate(fixedDate);
//   };
//   const dataToSend = {
//     // number: lotteryNumbers.map(num => ({ lottery_num: num })),
//     number: validNumbers.map(num => ({ lottery_num: num })),
//     period_date: periodDate
//   };
//   console.log("ส่งข้อมูล:", dataToSend);


//   const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault(); // ป้องกันการรีเฟรชหน้า

//     setSearchResult(lotteryNumbers.join(", "));

//     const dataToSend = {
//       number: lotteryNumbers.map(num => ({ lottery_num: num })),
//       period_date: periodDate
//     };
//     // console.log(dataToSend);
//     try {
//       const response = await fetch("/api/searchlottery", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(dataToSend)
//       });

//       const result = await response.json();
//       console.log("Response:", result);
//       // alert("ส่งข้อมูลสำเร็จ!");
//       if (result.status && result.response && Array.isArray(result.response.result)) {
//         setSearchResult(result.response.result); 
//       } else {
//         setSearchResult("");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("เกิดข้อผิดพลาด!");
//     }
//   };
//   const fetchLotteryResults = async (date: string) => {

//     const formattedDate = periodDate.split("-"); // แยกปี-เดือน-วัน
//     const dataToSend = {
//       date: formattedDate[2],  // วันที่
//       month: formattedDate[1], // เดือน
//       year: formattedDate[0]   // ปี
//     };

//     console.log("ส่งข้อมูล:", dataToSend);

    
//     try {
//       const response = await fetch("/api/lottery", { 
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(dataToSend)
//       });
//       // const response = await postdateLotto(dataToSend);

//       // const data = await response;
//       console.log("Data:",response);
//       setLotteryData(response);
//     } catch (error) {
//       console.error("Error fetching lottery results:", error);
//     }
//   };

//   // ✅ ดึงข้อมูลทุกครั้งที่เปลี่ยนงวดวันที่
//   // useEffect(() => {
//   //   fetchLotteryResults(periodDate);
//   // }, [periodDate]);
//   useEffect(() => {
//     // กำหนดค่า periodDate เป็นงวดล่าสุดอัตโนมัติ
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, "0");
//     let latestDay = today.getDate() >= 16 ? "16" : "01"; // เลือกวันที่ 1 หรือ 16
  
//     const latestPeriod = `${year}-${month}-${latestDay}`;
//     setPeriodDate(latestPeriod);
//     fetchLotteryResults(latestPeriod); 
//   }, [fetchLotteryResults]);
  
//   // ✅ ดึงข้อมูลทุกครั้งที่เปลี่ยนงวดวันที่
//   useEffect(() => {
//     fetchLotteryResults(periodDate);
//   }, [periodDate]);
  

//   return (
//     <div>
//       <Card className="w-full border-none">
//       <CardHeader>
//         <CardTitle>ผลสลากกินแบ่งรัฐบาล</CardTitle>
//       </CardHeader>
//       <CardContent className="">
//         <div className="">
//           <form onSubmit={handleSubmit}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name"><b>งวดประจำวันที่:</b></Label>
//                 {/* <Select value={selectedDate} onValueChange={(value) => setSelectedDate(value)}>
//                   <SelectTrigger id="framework">
//                     <SelectValue placeholder="งวดประจำวันที่" />
//                   </SelectTrigger>
//                   <SelectContent position="popper">
//                     <SelectItem value="2025-03-16">16 มีนาคม 2568</SelectItem>
//                     <SelectItem value="2025-03-01">1 มีนาคม 2568</SelectItem>
//                     <SelectItem value="2025-02-16">16 กุมภาพันธ์ 2568</SelectItem>
//                     <SelectItem value="2025-02-01">1 กุมภาพันธ์ 2568</SelectItem>
//                   </SelectContent>
//                 </Select> */}
//                 <Input type="date" value={periodDate} onChange={handleDateChange} required />
//                 <Label htmlFor="name"><b>กรอกตัวเลขที่ต้องการตรวจ:</b></Label>
//                 <div className="">
//                     {lotteryNumbers.map((num, index) => (
//                       <div key={index} className="flex gap-2 mb-4 justify-center">
//                         {/* <label>หมายเลขที่ {index + 1}:</label> */}
//                         <Input
//                           type="text"
//                           value={num}  // เชื่อมกับ numbers[index]
//                           onChange={(e) => handleLotteryChange(index, e.target.value)}
//                           maxLength={6}
//                           className="border border-gray-300 text-gray-700 text-lg font-semibold rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-gray-400"
//                         />
//                         {lotteryNumbers.length > 1 && (
//                             <button 
//                               onClick={() => handleRemoveField(index)} 
//                               className="bg-red-500 text-white px-2 py-1 rounded"
//                             >
//                               ❌
//                             </button>
//                           )}
//                       </div>
//                     ))}
//                 </div>

//                   {lotteryNumbers.length < 3 && (
//                     <button 
//                       onClick={handleAddField} 
//                       className="bg-green-500 text-white px-3 py-1 rounded mt-2"
//                     >
//                       ➕ เพิ่มช่อง (สูงสุด 3 ช่อง)
//                     </button>
//                   )}

//                 <Button type="submit"
//                   className="bg-red-500 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-red-600 transition"
//                 >
//                   ตรวจสลากฯ
//                 </Button>
//               </div>
//             </div>
//           </form>
 
//               <div className="flex flex-col space-y-1.5 items-center">
//                     {Array.isArray(searchResult) && searchResult.length > 0 ? (
//                       searchResult.map((res, index) => (
//                         <div key={index} className="p-4 border rounded-lg bg-gray-100 mt-4">
//                           <h2 className="text-lg font-semibold">🎉 ผลการตรวจสลาก</h2>
//                           {/* <p>📅 งวดวันที่: <span className="font-bold">{res.date}</span></p> */}
//                           <p>🔢 หมายเลข: <span className="font-bold">{res.number}</span></p>
//                             {res.statusType === 1 && res.status_data.length > 0 ? (
//                               <p className="text-green-600 font-bold">
//                                 🎉 ถูกรางวัล: {res.status_data.map((reward) => reward.reward).join(", ")}
//                               </p>
//                             ) : (
//                               <p className="text-red-500">❌ ไม่ถูกรางวัล</p>
//                             )}
//                         </div>
//                       ))
//                     ) : (
//                       <p className="text-lg text-gray-500"></p>
//                     )}

                    
//               </div>  
//           </div>
//            <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
//            <Input className="mt-4" type="date" value={periodDate} onChange={(e) => setPeriodDate(e.target.value)} />
//            {lotteryData && (
//            <div className="">
//                 <div className="flex flex-col items-center mt-4">
//                     <span className="text-2xl md:text-3xl lg:text-3xl font-bold">ผลสลากกินแบ่งรัฐบาล</span>
//                     {/* <span className="text-xs text-red-500">งวดวันที่ {selectedDate}</span> */}
//                 </div>
//                 <div className="flex flex-col items-center mt-4">
//                   <div className="flex flex-col items-center">
//                     <span className="text-base font-bold text-red-500">รางวัลที่ 1</span>
//                     <span className="text-gray-500 text-xs">รางวัลละ 6,000,000 บาท</span>
//                   </div>
//                   <span className="text-xl font-bold mt-4">{lotteryData.data.first.number[0].value}</span>
//                 </div>
//                 <div className="grid grid-cols-3 mt-4">
//                       <div className="flex flex-col items-center mx-5">
//                         <span className="text-base font-bold text-red-500">เลขหน้า 3 ตัว</span>
//                         <div className="flex flex-col items-center text-xs text-gray-500">
//                           <span className="">2 รางวัล</span>
//                           <span className="">รางวัลละ 4,000 บาท</span>
//                         </div>
//                         <div className="flex flex-col items-center mt-4">
//                           {Array.from({ length: 2 }).map((_, index1) => (  
//                         <span key={index1} className="font-bold">{lotteryData.data.last3f.number[index1].value}</span>
//                       ))}
//                         </div>
//                       </div>
//                     <div className="flex flex-col items-center mx-5">
//                       <span className="text-base font-bold text-red-500">เลขท้าย 3 ตัว</span>
//                       <div className="flex flex-col items-center text-xs text-gray-500">
//                         <span className="">2 รางวัล</span>
//                         <span className="">รางวัลละ 4,000 บาท</span>
//                       </div>
//                       <div className="flex flex-col items-center mt-4">
//                         {Array.from({ length: 2 }).map((_, index1) => (  
//                         <span key={index1} className="font-bold">{lotteryData.data.last3b.number[index1].value}</span>
//                       ))}
//                       </div>
//                     </div>
//                       <div>
//                         <div className="flex flex-col items-center mx-5">
//                           <span className="text-base font-bold text-red-500">เลขท้าย 2 ตัว</span>
//                           <div className="flex flex-col items-center text-xs text-gray-500">
//                             <span className="">1 รางวัล</span>
//                             <span className="">รางวัลละ 2,000 บาท</span>
//                           </div>
//                           <p className="font-bold mt-4">{lotteryData.data.last2.number[0].value}</p>
//                         </div>
//                       </div>
//                   </div>
//                   <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
//                   <div className="mt-4 flex flex-col items-center">
//                     <span className="text-base font-bold text-red-500">รางวัลข้างเคียงรางวัลที่ 1</span>
//                     <span className="text-gray-500 text-xs">2 รางวัล รางวัลละ 100,000 บาท</span>
//                     <div className="grid grid-cols-2 gap-x-12 gap-y-3 mt-4">
//                       {Array.from({ length: 2 }).map((_, index1) => (  
//                         <span key={index1} className="font-bold">{lotteryData.data.second.number[index1].value}</span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
//                   <div className="mt-4 flex flex-col items-center">
//                     <span className="text-base font-bold text-red-500">รางวัลที่ 2</span>
//                     <span className="text-gray-500 text-xs">5 รางวัล รางวัลละ 200,000 บาท</span>
//                     <div className="grid grid-cols-3 justify-center pt-2 gap-x-12 gap-y-3">
//                       {Array.from({ length: 5 }).map((_, index1) => (  
//                         <span key={index1} className="font-bold mx-3 w-full">{lotteryData.data.second.number[index1].value}</span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
//                   <div className="mt-4 flex flex-col items-center">
//                     <span className="text-base font-bold text-red-500">รางวัลที่ 3</span>
//                     <span className="text-gray-500 text-xs">10 รางวัล รางวัลละ 80,000 บาท</span>
//                     <div className="grid grid-cols-3 justify-center pt-2 gap-x-12 gap-y-3">
//                       {Array.from({ length: 10 }).map((_, index1) => (  
//                         <span key={index1} className="font-bold mx-3 w-full">{lotteryData.data.third.number[index1].value}</span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
//                   <div className="mt-4 flex flex-col items-center">
//                     <span className="text-base font-bold text-red-500">รางวัลที่ 4</span>
//                     <span className="text-gray-500 text-xs">50 รางวัล รางวัลละ 40,000 บาท</span>
//                     <div className="grid grid-cols-3 justify-center pt-2 gap-x-12 gap-y-3">
//                       {Array.from({ length: 50 }).map((_, index1) => (  
//                         <span key={index1} className="font-bold mx-3 w-full">{lotteryData.data.fourth.number[index1].value}</span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="w-full border-t border-dashed border-gray-500 mt-4"></div>
//                   <div className="mt-4 flex flex-col items-center">
//                     <span className="text-base font-bold text-red-500">รางวัลที่ 5</span>
//                     <span className="text-gray-500 text-xs">100 รางวัล รางวัลละ 20,000 บาท</span>
//                     <div className="grid grid-cols-3 justify-center pt-2 gap-x-12 gap-y-3">
//                       {Array.from({ length: 100 }).map((_, index1) => (  
//                         <span key={index1} className="font-bold mx-3 w-full">{lotteryData.data.fifth.number[index1].value}</span>
//                       ))}
//                     </div>
//                   </div> 
//                 </div>
//               )}
        
//       </CardContent>
//       {/* <CardFooter className="flex justify-between">
//       </CardFooter> */}
//     </Card>
//     </div>
//   );
// }
