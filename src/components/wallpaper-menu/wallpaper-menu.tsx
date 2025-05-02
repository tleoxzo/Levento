// components/WallpaperGrid.tsx

import { Check, Calendar, Mountain } from 'lucide-react';
import Blog from '../blog/blog';
import Link from 'next/link';

const wallpaperItems = [
  { icon: <Check className="w-10 h-10" />, label: 'Wallpaper\n ฟรี', href: '/wallpaper/moo-12zodiac' },
  { icon: <Calendar className="w-10 h-10" />, label: 'Wallpaper\nประจำวันเกิด', href: '/wallpapers/birthday' },
  { icon: <span className="text-2xl">♍️</span>, label: 'Wallpaper\nประจำราศีเกิด', href: '/wallpapers/zodiac' },
  { icon: <Mountain className="w-10 h-10" />, label: 'Wallpaper\nปีนักษัตร', href: '/wallpapers/chinese' },
  { icon: null, label: 'Wallpaper\nภาพ A', href: '/wallpapers/a' },
  { icon: null, label: 'Wallpaper\nภาพ B', href: '/wallpapers/b' },
  { icon: null, label: 'Wallpaper\nภาพ C', href: '/wallpapers/c' },
  { icon: null, label: 'Wallpaper\nภาพ D', href: '/wallpapers/d' },
  { icon: null, label: 'Wallpaper\nภาพ E', href: '/wallpapers/e' },
];


export default function WallpaperGrid() {
  return (
    <div className="max-w-5xl mx-auto p-6">
  <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 w-full px-4 py-2 rounded-xl text-black font-bold text-lg mb-8 shadow-lg text-center">
    Wallpaper
  </div>

      <div className="grid grid-cols-3 gap-6 mx-5 mb-4">
      {wallpaperItems.map((item, idx) => (
        <Link href={item.href} key={idx}>
          <div className="flex flex-col items-center space-y-2 cursor-pointer transition-transform duration-200 hover:scale-105">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center shadow-lg">
              {item.icon}
            </div>
            <p className="text-center whitespace-pre-line text-sm">{item.label}</p>
          </div>
        </Link>
      ))}

       
      </div>
       <Blog/>
    </div>
  );
}
