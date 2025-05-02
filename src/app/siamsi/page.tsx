"use client";
import { HeaderApp } from "@/components/layout/header/header-app";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

export default function Siamsi(){
    const router = useRouter();
    const [shaking, setShaking] = useState(false);
    const [stickVisible, setStickVisible] = useState(false);
    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const [showTube, setShowTube] = useState(false);
    const [showhome, setShowhome] = useState(true);

    const handleShake = () => {
        setShowhome(false);
        setShowTube(true); 
        setShaking(true);
        setStickVisible(false);
        setRandomNumber(null);

        setTimeout(() => {
        setShaking(false);
        setTimeout(() => {
            setStickVisible(true); // ✅ ให้ไม้เริ่มขึ้นช้าลง
            setRandomNumber(Math.floor(Math.random() * 28) + 1);
        }, 800); // ✅ ดีเลย์ 0.8 วินาทีก่อนขึ้น
        }, 1500);
    };
    return(
        <>
        <HeaderApp />
            <div className="flex flex-col bg-[#2f1c1c] items-center justify-center min-h-screen">
                <AnimatePresence>
                    {showhome && (
                        <motion.div
                        key="home"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        >
                        <Image
                            src="/images/siamsi/homesiamsi.png"
                            alt="homesiamsi"
                            width={1000}
                            height={800}
                        />
                        </motion.div>
                    )}
                    </AnimatePresence>
                    <AnimatePresence>
                    {showTube && (
                        <motion.div
                        key="tube"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        className={`relative w-[200px] h-[280px] flex justify-center items-end z-10 ${
                            shaking ? "animate-shake" : ""
                        }`}
                        >
                        
                        <Image
                            src="/images/siamsi/kabok.png"
                            alt="กระบอกเซียมซี"
                            width={1000}
                            height={800}
                            className="drop-shadow-xl object-contain z-10 absolute top-0 left-0 w-full h-full"
                            priority
                        />

                        
                        {stickVisible && (
                            <div className="absolute bottom-full flex flex-col items-center animate-stickUp z-20">
                            <div className="w-8 h-32 rounded-t-full relative flex items-start justify-center text-[#820A0A] text-lg font-bold">
                                <Image
                                src="/images/siamsi/num.png"
                                alt="เซียมซีหมายเลข"
                                width={600}
                                height={500}
                                className="absolute top-0 left-0 object-cover z-0"
                                />
                                <span className="absolute top-4">{randomNumber}</span>
                            </div>
                            </div>
                        )}

                       
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                            key={index}
                            className="absolute bottom-5 w-5 h-40 flex flex-col rounded-t-lg transition-all duration-500 ease-in-out"
                            style={{
                                transitionDelay: "0.8s",
                                left: `${10 + index * 10}%`,
                                transform: shaking
                                ? `translateY(-100px) rotate(${Math.random() * 20 - 10}deg)`
                                : "translateY(0)",
                                zIndex: 5, 
                            }}
                            >
                            <Image
                                src="/images/siamsi/num.png"
                                alt="ไม้เซียมซี"
                                width={600}
                                height={500}
                                className="object-contain"
                            />
                            </div>
                        ))}
                        </motion.div>
                    )}
                    </AnimatePresence>

                <button
                    onClick={handleShake}
                    className="mt-6 px-8 py-3 bg-[#F5C724] text-[#820A0A] text-lg font-bold rounded-full shadow-lg border-b-4 border-yellow-500 hover:bg-[#ffd43b] hover:scale-105 active:scale-95 transition-all"
                >
                    คลิกเพื่อเขย่าเซียมซี
                </button>

                
                {randomNumber && (
                    <button
                    onClick={() => router.push(`/siamsi/detail/${randomNumber}`)}
                    className="mt-4 px-6 py-2 bg-[#11B13A] text-white font-bold rounded-full shadow-md hover:bg-[#0e9d32] hover:scale-105 active:scale-95 transition-all"
                    >
                    อ่านเลขเซียมซี
                    </button>
                )}
                </div>
                
        </>
    )
}