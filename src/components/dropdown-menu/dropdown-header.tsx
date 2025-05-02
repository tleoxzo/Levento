'use client'
import { Headset, History, LogOut, User } from 'lucide-react'
import liff from '@line/liff'
import { useEffect, useState } from 'react'

import {
  DropdownMenu as DropdownMenuComponent,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { HambugerbarIcon } from '@/components/icon/hamburgerbarIcon'
import Image from 'next/image'

interface UserProfile {
  displayName: string;
  pictureUrl?: string;
  userId: string;
}

export function DropdownHeader() {
  const [liffReady, setLiffReady] = useState(false)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const LiffID= process.env.NEXT_PUBLIC_LINE_LIFF_ID as string

  useEffect(() => {
    const initLiff = async () => {
      try {
        await liff.init({ liffId: LiffID })
        setLiffReady(true)

        if (liff.isLoggedIn()) {
          const userProfile = await liff.getProfile()
          const data: UserProfile = {
            displayName: userProfile.displayName,
            pictureUrl: userProfile.pictureUrl,
            userId: userProfile.userId
          }
          setProfile(data)
          localStorage.setItem('lineProfile', JSON.stringify(data))
        }
      } catch (error) {
        console.error('LIFF init failed', error)
      }
    }

    // ดึงข้อมูลจาก localStorage ถ้ามี
    const localData = localStorage.getItem('lineProfile')
    if (localData) {
      setProfile(JSON.parse(localData))
    }

    initLiff()
  }, [])

  const handleLogin = () => {
    if (!liffReady) {
      console.warn('LIFF not ready yet')
      return
    }

    if (!liff.isLoggedIn()) {
      try {
        liff.login()
      } catch (error) {
        console.error('Error during login:', error)
      }
    }
  }

  const handleLogout = () => {
    liff.logout()
    localStorage.removeItem('lineProfile')
    window.location.reload()
  }

  return (
    <DropdownMenuComponent>
      <DropdownMenuTrigger>  
          <HambugerbarIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {profile ? (
          <>
            <DropdownMenuLabel>
            <div className="flex items-center space-x-2">
                <Image
                  src={profile.pictureUrl || '/default-avatar.png' }
                  alt={profile.displayName}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
                <span>{profile.displayName}</span>
            </div>  
              </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>โปรไฟล์</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <History className="mr-2 h-4 w-4" />
                <span>ประวัติ</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Headset className="mr-2 h-4 w-4" />
                <span>ช่วยเหลือ</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>ออกจากระบบ</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        ) : (
          <DropdownMenuItem onClick={handleLogin}>
            <User className="mr-2 h-4 w-4" />
            <span>เข้าสู่ระบบด้วย LINE</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenuComponent>
  )
}
