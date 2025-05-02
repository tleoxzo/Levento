"use client"
import Link from "next/link";
import Image from 'next/image';
import { HeaderApp } from "@/components/layout/header/header-app";
import { Button } from "@/components/ui/button";

export default function Horoscope() {
  return (
    <>
      <HeaderApp />
      <div className="bg-black flex flex-col items-center pt-5">
        <div className="w-full max-w-screen-xl px-5">
          {/* Image 1 */}
          <Image
            alt="tarodCardImg"
            src="/images/horoscope/bg/photo1.png"
            width={1200}
            height={600}
            className="w-full px-5"
          />

          {/* Headline */}
          <h1 className="text-xl md:text-3xl text-center my-5 text-white leading-relaxed px-5">
            100% ไม่มีใครบอกว่าไม่แม่นเลย บางคนดวงแรง <br />
            อาจารย์สามารถตอบคำถามในใจเขาได้เลยโดยไม่ต้องเปิดไพ่ <br />
            ออกมาโช้ะๆ ตามที่เขาคิดไว้ทุกอย่าง
          </h1>

          {/* Image 2 */}
          <Image
            alt="tarodCardImg"
            src="/images/horoscope/bg/photo2.png"
            width={1200}
            height={600}
            className="w-full px-5"
          />

          {/* Responsive Buttons */}
          <div className="py-4 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 my-4 px-5">
            <Button className="bg-yellow-400 text-black font-bold shadow hover:bg-yellow-500 rounded-md h-12 px-8 text-base md:text-lg w-full md:w-auto">
              เรื่องที่คุณต้องรู้
            </Button>
            <Button className="bg-yellow-400 text-black font-bold shadow hover:bg-yellow-500 rounded-md h-12 px-8 text-base md:text-lg w-full md:w-auto">
              ท่านอยากเตือน
            </Button>
            <Button className="bg-yellow-400 text-black font-bold shadow hover:bg-yellow-500 rounded-md h-12 px-8 text-base md:text-lg w-full md:w-auto">
              วิธีเสริมดวง
            </Button>
          </div>

          {/* Images (3-10) */}
          {/* <Link href="/products"> */}
            <Image
              alt="tarodCardImg"
              src="/images/horoscope/bg/photo3.png"
              width={1200}
              height={600}
              className="w-full px-5"
            />
          {/* </Link> */}
          <h1 className="text-xl md:text-3xl text-center my-5 text-white leading-relaxed px-5">
            ปัจจุบันอาจารย์ยินดีช่วยทุกท่าน แต่ทุกอย่างต้องไม่เกินกรรม<br />
            ตั้งจิตอธิษฐานขอเทวดาประจำตัวให้เปิดทางให้อาจารย์<br />
            มองเห็นสิ่งที่ท่านอยากจะสื่อสาร
          </h1>
          <Link href="/products">
            <Image
              alt="tarodCardImg"
              src="/images/horoscope/bg/photo4.png"
              width={1200}
              height={600}
              className="w-full px-5 hover:scale-105 transition-transform"
            />
          </Link>
          <Image
              alt="tarodCardImg"
              src={`/images/horoscope/bg/photo5.png`}
              width={1200}
              height={600}
              className={`w-full px-5`}
            />
          <Link href="/products">
            <Image
              alt="tarodCardImg"
              src="/images/horoscope/bg/photo6.png"
              width={1200}
              height={600}
              className="w-full px-5 hover:scale-105 transition-transform"
            />
          </Link>
            <Image
              alt="tarodCardImg"
              src="/images/horoscope/bg/photo7.png"
              width={1200}
              height={600}
              className="w-full px-5"
            />
            <Image
              alt="tarodCardImg"
              src="/images/horoscope/bg/photo8.png"
              width={1200}
              height={600}
              className="w-full px-5"
            />
          <h1 className="text-xl md:text-3xl text-center my-5 text-white leading-relaxed px-5">
              อาจารย์สแน็กวิศรุต ผู้ที่ท้าทายลบหลู่เทวดาประตัวตั้งแต่อายุ 13 <br />
              ด้วยการตะโกนออกไปว่า {`"ไหนถ้ามีอยู่จริงมาแนะนำตัวให้รู้จักหน่อย"`}  <br />
              และในคืนนั้นเอง ขณะที่ตัวอาจารย์ปิดไฟนอนอยู่ในห้องก็เห็นเงา  <br />
              อยู่ที่ปลายเตียง และเขาก็โน้มตัวเข้ามาใกล้ๆ จึงได้เห็นว่าเป็นผู้ชายใส่ชุดจีน<br />
              ก้มหน้ามาหัวเราะเสียงดังแต่ในขณะนั้นเองตัวขยับไม่ได้เลย<br />
              จึงได้แต่นึกขอขมา ขอโทษในสิ่งที่เคยไปลบหลู่ แล้วสิ่งนั้นจึงค่อยๆ หายไป<br />
          </h1>
          <Image
            alt="tarodCardImg"
            src="/images/horoscope/bg/photo9.png"
            width={1200}
            height={600}
            className="w-full px-5"
          />
          <h1 className="text-xl md:text-3xl text-center my-5 text-white leading-relaxed px-5">
            เรื่องที่ทำให้อาจารย์เข็ดจนเลิกดูดวงไปพักใหญ่<br />
            เพราะเพื่อนสนิทเคยมาขอร้องให้ช่วยน้าที่เป็นคนป่วย หมอบอกว่าอยู่ได้อีกไม่กี่เดือน<br />
            อาจารย์ก็ช่วยเต็มที่เอาดวงมาดู เอาดวงไปทำ เอาดวงไปแก้ให้ทุกอย่าง<br />
            กลายเป็นว่าน้าหายกลับมาชีวิตได้ตามปกติ <br />
            แต่หลังจากนั้นทุกอย่างเหมือนมาตกอยู่ที่ตัวอาจารย์เอง จากคนผิวขาวก็กลายเป็นผิวคล้ำ<br />
            ปากมีไหม้รอบๆ ตกงานหางานทำไม่ได้อยู่ 5 - 6 ปี ตอนนั้นจึงคิดแล้วว่า {`"จะไม่ดูดวงให้ใครอีกเพราะเข็ดจริงๆ"`}<br />
          </h1>
          <h1 className="text-xl md:text-3xl text-center my-5 text-white leading-relaxed px-5">
          แต่หลังจากนั้นไม่นานชีวิตก็พลิกผันได้ไปทำงานอาสาในมูลินิธิฮุก 31 นครราชสีมา<br />
          ได้เจอกับอาจารย์จี้กงในศาลเจ้า อาจารย์ท่านนั้นพูดว่า {`“ลื้อมาอยู่ที่นี่ไม่นานหรอก`} <br />
          {`แค่มาสูบลมแล้วก็ไป ถ้าไปแล้วอย่าลืมที่นี่เพราะที่นี่ให้โอกาสลื้อ”`} <br />
          หลังจากนั้นก็ให้บทคาถามาสวดบอกว่าไม่เกิน 7 วันเดี๋ยวก็ได้งาน และก็ได้งานตามที่ท่านว่าจริง<br />
          </h1>
          
            <Image
              alt="tarodCardImg"
              src="/images/horoscope/bg/photo10.png"
              width={1200}
              height={600}
              className="w-full px-5 my-5"
            />
            <Image
              alt="tarodCardImg"
              src="/images/horoscope/bg/photo11.jpg"
              width={1200}
              height={600}
              className="w-full px-5 my-5"
            />
            <Image
              alt="tarodCardImg"
              src="/images/horoscope/bg/photo12.png"
              width={1200}
              height={600}
              className="w-full hover:scale-105 transition-transform my-5"
            />
        </div>
      </div>
    </>
  );
}
