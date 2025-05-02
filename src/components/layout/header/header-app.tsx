import { DropdownHeader } from "@/components/dropdown-menu/dropdown-header";
import Image from "next/image";

export const HeaderApp = () => {
  return (
    <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-[#F5C724]'>
      <div className='container mx-auto'>
        <nav className='flex left-0 right-0 justify-between items-center'>
          <div></div>
          <div className='logo'>
            <Image
              // src='https://wuhiuwvfarqsrwwbcqsd.supabase.co/storage/v1/object/public/public-app/moo100-logo-black.png'
              src={'/images/logo/moo100-logo-black.png'}
              alt='Moo100lan logo'
              width={120}
              height={40}
              priority
            />
          </div>
          <div className='flex '>{<DropdownHeader />}</div>
        </nav>
      </div>
    </header>
  );
};
