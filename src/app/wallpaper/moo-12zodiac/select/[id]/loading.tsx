import Image from "next/image";
export default function Loading() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
          
        <Image
                src={"/images/logo/moo100-logo.png"}
                alt={"LOGO"}
                width={450}
                height={200}
                className="hover:shadow-lg cursor-pointer" />
        <div className="loader mt-4"></div> 
      </div>
    );
  }