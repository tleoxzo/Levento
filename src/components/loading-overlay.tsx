import Image from "next/image";
export default function LoadingOverlay() {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80">
        {/* <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div> */}
        <Image
                        src={"/wallpaper/logo/moo100-logo.png"}
                        alt={"LOGO"}
                        width={450}
                        height={200}
                        className="hover:shadow-lg cursor-pointer" />
                <div className="loader mt-4"></div> 
      </div>
    );
  }