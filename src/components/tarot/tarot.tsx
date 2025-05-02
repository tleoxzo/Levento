"use client";

// import { useState } from 'react';
import { Card } from "@/components/ui/card"
import Image from "next/image";
// import { Button } from "@/components/ui/button"

const dummyCards = [
  {
    name: "FIVE OF PENTACLES",
    image: "/cards/five-of-pentacles.jpg"
  },
  {
    name: "TEN OF CUPS",
    image: "/cards/ten-of-cups.jpg"
  },
  {
    name: "FIVE OF SWORDS",
    image: "/cards/five-of-swords.jpg"
  }
];


const ratings: { [key: string]: number } = {
    luck: 4,
    work: 3,
    money: 5,
    health: 2,
    love: 4,
    summary: 4
  };

export default function TarotReadingPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="text-center text-yellow-400 text-2xl font-bold mb-6">
        ตั้งจิตอธิษฐานเปิดไพ่ 3 ใบ
      </div>

      {/* Card Display */}
      <div className="flex justify-center gap-4 mb-6">
        {dummyCards.map((card, idx) => (
          <Image
            key={idx}
            src={card.image}
            alt={card.name}
            className="w-32 rounded-lg shadow-md border border-white"
          />
        ))}
      </div>

      {/* Video Section (Mockup) */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <Image
            src="/video-placeholder.jpg"
            alt="Video"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-white p-3 rounded-full">
              ▶️
            </div>
          </div>
        </div>
      </div>

      {/* Radar Chart Placeholder */}
      <div className="flex justify-center mb-6">
        <Card className="p-4 bg-white text-black w-full max-w-md">
          <div className="text-center">(Radar Chart แสดงผลด้านต่าง ๆ)</div>
        </Card>
      </div>

      {/* Ratings */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
        {Object.entries(ratings).map(([label, score]) => (
          <Card key={label} className="p-4 bg-white text-black">
            <div className="font-semibold capitalize mb-2">{label === 'luck' ? 'โชคลาภ' :
              label === 'work' ? 'การงาน' :
              label === 'money' ? 'การเงิน' : 'สุขภาพ'}</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full ${i <= score ? 'bg-yellow-400' : 'bg-gray-300'}`}
                ></div>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
        {[['love', 'ความรัก'], ['summary', 'คำทำนาย ดี 80%']].map(([key, label]) => (
          <Card key={key} className="p-4 bg-white text-black">
            <div className="font-semibold mb-2">{label}</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full ${i <= ratings[key] ? 'bg-yellow-400' : 'bg-gray-300'}`}
                ></div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Prediction Text */}
      <div className="flex justify-center mb-6">
        <Card className="p-4 bg-white text-black max-w-md w-full">
          <div className="font-semibold mb-2">คำทำนาย 🔮</div>
          <p className="text-sm leading-relaxed">
            ฟ้าเปิด ดาวสว่าง หมดเคราะห์ หมดทุกข์ จากนี้ไปมีแต่เรื่องดีๆ<br />
            ชีวิตประสบความสำเร็จ หยิบจับอะไรเป็นเงินเป็นทอง มหาเฮง<br /><br />
            หมดทุกข์ หมดโศก ใครที่ป่วยอยู่จะได้เจอหมอดียาดี อยู่ในช่วงบำบัดฟื้นฟู
          </p>
        </Card>
      </div>

      <div className="flex justify-center">
        <Card className="p-4 bg-white text-black max-w-md w-full">
          <div className="font-semibold mb-2">ขายสินค้า เสริมดวง</div>
          <p className="text-sm leading-relaxed">
            ฟ้าเปิด ดาวสว่าง หมดเคราะห์ หมดทุกข์ จากนี้ไปมีแต่เรื่องดีๆ<br />
            ชีวิตประสบความสำเร็จ หยิบจับอะไรเป็นเงินเป็นทอง มหาเฮง<br /><br />
            หมดทุกข์ หมดโศก ใครที่ป่วยอยู่จะได้เจอหมอดียาดี อยู่ในช่วงบำบัดฟื้นฟู
          </p>
        </Card>
      </div>
    </div>
  );
}