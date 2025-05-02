// app/siamsi/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from 'next/image'
import { predictions } from "@/app/siamsi/_config/config";
import { HeaderApp } from "@/components/layout/header/header-app";


type Props = Promise<{ id: number; } >
  

export default async function SiamsiResultPage({ params }:{ params: Props }) {
  const { id } = await params;
  // const id = parseInt(params.id);

  const prediction = predictions[id];

  if (!prediction) {
    return notFound(); 
  }

  return (
  <>
    <HeaderApp />
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#2f1c1c]">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center border border-red-300">
        <h1 className="text-4xl font-bold text-red-600 mb-4">เซียมซีหมายเลข {id}</h1>
        <Image
          src={prediction}
          alt={`เซียมซีหมายเลข ${id}`}
          width={450}
          height={200}
          // className="hover:shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
        />
        {/* <p className="text-lg text-gray-700">{prediction}</p> */}
      </div>
    </div>
    </>
  );
} 
