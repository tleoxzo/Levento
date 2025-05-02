import { HeaderApp } from "@/components/layout/header/header-app";
import  SearchLottery  from "@/components/searchlotto/seachlottery";

export default function Lotterrypage(){
    return(
        <>
        <HeaderApp />
            <div className=" flex flex-col items-center justify-center min-h-screen p-4 bg-[#F5F5F5]">
                <SearchLottery />
            </div>
            
        </>
    )
}