"use client";

import { useEffect, useState } from 'react';
import liff from '@line/liff';
import { Button } from '@/components/ui/button';
import { HeaderApp } from '@/components/layout/header/header-app';
import Image from 'next/image';

interface UserProfile {
  displayName: string;
  pictureUrl?: string;
  userId: string;
}

const Home = () => {
  const [liffReady, setLiffReady] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const LiffID= process.env.NEXT_PUBLIC_LINE_LIFF_ID as string

  useEffect(() => {
    const initLiff = async () => {
      try {
        await liff.init({ liffId: LiffID });
        setLiffReady(true);

        if (liff.isLoggedIn()) {
          const userProfile = await liff.getProfile();
          setProfile({
            displayName: userProfile.displayName,
            pictureUrl: userProfile.pictureUrl, // อาจเป็น undefined ได้
            userId: userProfile.userId
          });
        }
      } catch (error) {
        console.error('LIFF init failed', error);
      }
    };

    initLiff();
  }, []);

  const handleLogin = () => {
    if (!liffReady) {
      console.warn("LIFF not ready yet");
      return;
    }

    if (!liff.isLoggedIn()) {
      try {
        liff.login();
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  };

  const handleLogout = () => {
    liff.logout();
    window.location.reload();
  };

  return (
    <>
      <HeaderApp />
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {!profile ? (
        <Button 
          className="bg-amber-500" 
          type="button" 
          onClick={handleLogin}
          disabled={!liffReady}
        >
          Login with LINE
        </Button>
      ) : (
        <div className="text-center">
          <Image 
            src={profile.pictureUrl ?? "/default-avatar.png"} 
            alt="Profile"
            width={300} height={300}
            className="w-24 h-24 rounded-full mx-auto mb-2"
          />
          <h2 className="text-xl font-bold">{profile.displayName}</h2>
          <p className="text-sm text-gray-500">{profile.userId}</p>
          <Button className="mt-4 bg-red-500" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )}
    </div>
    </>
  );
};

export default Home;
