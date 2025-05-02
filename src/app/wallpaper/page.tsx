import { CarouselApp } from "@/components/carousel/carousel";
import { HeaderApp } from "@/components/layout/header/header-app";
import WallpaperGrid from "@/components/wallpaper-menu/wallpaper-menu";

export default function Wallpaper() {
    return (
        <>
        <HeaderApp />
        <div className=" min-h-screen text-white p-6 flex flex-col items-center">
            <CarouselApp />
            <WallpaperGrid />
        </div>
    </>
    )
}