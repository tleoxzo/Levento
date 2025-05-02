// import { Moo12Zodiac } from './moo-12zodiac-page'

// export default Moo12Zodiac
// wallpaper/moo-12zodiac/page.tsx
import { Suspense } from "react";
import { Moo12Zodiac } from "./moo-12zodiac-page"; // UI หลักที่โหลดช้า
import { HeaderApp } from "@/components/layout/header/header-app";

export default function Moo12ZodiacPage() {
  return (
    <div className="bg-[#2f1c1c]">
      <HeaderApp />
      <Suspense fallback={<p>กำลังโหลด...</p>}>
        <Moo12Zodiac />
      </Suspense>
    </div>
  );
}
