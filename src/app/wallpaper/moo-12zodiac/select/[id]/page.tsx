'use client'

import { Loader2 } from "lucide-react";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { th } from 'date-fns/locale'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useParams } from 'next/navigation'
import { DateTimePicker } from '@/components/ui/datetime-picker'
import { chainaOptions, numberOption, options } from '../../_config/config'
import { Award, Calendar, MessageSquare, Star } from 'lucide-react'
import LoadingOverlay from '@/components/loading-overlay'
import { HeaderApp } from '@/components/layout/header/header-app'
import liff from '@line/liff'
import { Timer } from '../../_components/timer'
import QRCode from 'react-qr-code'
import { motion } from "framer-motion";

interface UserProfile {
  displayName: string;
  pictureUrl?: string;
  userId: string;
}

export default function SelectWallpaper() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState<Date>()
  const [lucky1, setLucky1] = useState('')
  const [lucky2, setLucky2] = useState('')
  const [lucky3, setLucky3] = useState('')
  const [chaina, setChaina] = useState('')
  const [number, setNumber] = useState('')
  const [step, setStep] = useState(1)
  const [imageURL, setImageURL] = useState('')
  const [isTimerExpired, setIsTimerExpired] = useState(false)
  // const [paymentStatus, setPaymentStatus] = useState<'pending' | 'processing' | 'success' | 'failed'>('pending')
  // const [hasDownloaded, setHasDownloaded] = useState(false)
  const [checkingPayment, setCheckingPayment] = useState(false);
  const [, setLiffReady] = useState(false)
  const [profile, setProfile] = useState<UserProfile | null>(null)

  const LiffID= process.env.NEXT_PUBLIC_LINE_LIFF_ID as string

const handleSimulatePayment = () => {
  setCheckingPayment(true);
  sendImageToUser()
  setTimeout(() => {
    setStep(4);
  }, 3000); 
};
  const maxDate = new Date()

  useEffect(() => {
    setTimeout(() => { 
      setIsLoading(false)
    }
    , 2000)
  }, [])
  

  // const handleDownload = async () => {
  //   setIsLoading(true);
  //   // const link = document.createElement('a');
  //   // link.href = imageURL;
  //   // link.download = `12zodiac_${id}.jpg`;
  //   // document.body.appendChild(link);
  //   // link.click();
  //   // document.body.removeChild(link);
    

  //   if (typeof liff !== 'undefined') {
  //     try {
  //       await liff.init({ liffId: '2007282023-VkjDzLev' }); // เปลี่ยนเป็น liffId จริงของคุณ
  //       liff.openWindow({
  //         url: imageURL,
  //         external: true,
  //       });
  //     } catch (error) {
  //       console.error('LIFF init failed', error);
  //     }
  //   } else {
  //     console.error('LIFF SDK not loaded');
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    const initLiff = async () => {
      try {
        if (!LiffID) {
          throw new Error('LIFF ID is not defined')
        }
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
          return
        }
      } catch (err) {
        console.error('LIFF init failed:', err)
      }
  
      // fallback localStorage
      const localData = localStorage.getItem('lineProfile')
      if (localData) {
        setProfile(JSON.parse(localData))
      }
    }
  
    initLiff()
  }, [])
  
  const sendImageToUser = async () => {
    if (!profile?.userId) return alert('ยังไม่เข้าสู่ระบบ LINE กรุณาเข้าสู่ระบบ')
  
    const res = await fetch('/api/send-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: profile.userId,
        imageUrl: `https://shorturl.asia/axPOQ`,
        previewUrl: `https://shorturl.asia/axPOQ`
      })
    })
  
    const result = await res.json()
    console.log('LINE API response:', result)
    console.log('LINE API URL:', `https://1954-2405-9800-ba20-5bd2-814f-cdda-771c-47aa.ngrok-free.app${imageURL}`)
    console.log('LINE API userId:', profile.userId)
  }
  

  // const handleDownload = async () => {
  //   setIsLoading(true);
  //   try {
  //     if (!imageURL) {
  //       throw new Error('Image URL is not defined');
  //     }
   
  //     // if (typeof liff !== 'undefined') {
  //       await liff.init({ liffId: '2007282023-VkjDzLev' }); // ใช้ LIFF ID จริงของคุณ
  //       liff.openWindow({
  //         url: imageURL,
  //         external: true, // เปิดในเบราว์เซอร์ภายนอก
  //       });
  //     // } else {
  //     //   const link = document.createElement('a');
  //     //   link.href = imageURL;
  //     //   link.download = `12zodiac_${id}.jpg`;
  //     //   document.body.appendChild(link);
  //     //   link.click();
  //     //   document.body.removeChild(link);
  //     // }
  //   } catch (error) {
  //     console.error('Download process failed:', error);
  //   }

  //   setIsLoading(false)
  // };
  
  const handleSelectLucky1 = (value: string) => {
    setLucky1(value)
  }

  const handleSelectLucky2 = (value: string) => {
    setLucky2(value)
  }
  const handleSelectLucky3 = (value: string) => {
    setLucky3(value)
  }
  const handleSelectChaina = (value: string) => {
    setChaina(value)
  }
  const handleSelectNumber = (value: string) => {
    setNumber(value)
  }

  const onClickStep1 = () => {
    setIsLoading(true)
    if (!name || !birthday || !lucky1 || !lucky2) {
      alert('กรุณากรอกข้อมูลให้ครบ')
      return
    }
    localStorage.setItem('selectData', JSON.stringify({ name, birthday, lucky1, lucky2, lucky3, chaina, number }))
    setStep(2)
    // setIsLoading(false)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const onClickStep2 = async () => {
    interface WallpaperData {
      birthday: string
      name: string
      lucky1: string
      lucky2: string
      lucky3: string
      chaina: string
      number: string
      productName: string
      wallpaperId: string
    }
    const data = localStorage.getItem('selectData')
    if (data) {
      setIsLoading(true)
      const jsonData: WallpaperData = JSON.parse(data)

      jsonData.productName = '12zodiac'
      jsonData.wallpaperId = typeof id === 'string' ? id : ''

      // Call API create wallpaper
      const res = await fetch('/api/v1/create-wallpaper', {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        // const imageBlob = await res.blob()
        // const imageURL = URL.createObjectURL(url)
        // setImageURL(imageURL)

        const { imageUrl } = await res.json()
        console.log('imageUrl', imageUrl)
        setImageURL(imageUrl)


        setStep(3)
        setIsLoading(false)

        // setTimeout(() => {
        //   setIsLoading(false)
        // }, 2000)
      }
    }
  }

  if (step === 2) {
    return (
      <>
      <HeaderApp />
      {isLoading && <LoadingOverlay />}
      <div className="flex flex-col items-center py-10">
        <h2 className="text-xl font-bold text-[#fff]">ยืนยันคำสั่งซื้อ</h2>
        <div className="flex flex-col gap-4 mt-5">
          <div className="flex flex-col gap-2 mx-auto">
            <Image src={`/wallpaper/12zodiac/bg/${id}.jpg`} alt="12 zodiac" width={250} height={0} />
          </div>
          {/* <Card className="mt-5 py-5">
            <CardContent>
              <div className="pb-2">
                <Label className="text-xl ">ชื่อ - นามสกุล</Label>
                <p>{name}</p>
              </div>

              <div className="pb-2">
                <Label className="text-xl">วันเกิด</Label>
                <p>{birthday ? format(birthday, 'd MMMM yyyy', { locale: th }) : ''}</p>
              </div>
              
              <div className="pb-2">
                <Label className="text-xl">ชุดเลขมงคล</Label>
                <p>{numberOption.find((option) => option.value === number)?.label}</p>
              </div>

              <div className="pb-2">
                <Label className="text-xl">ความปรารถนา1</Label>
                <p>{options.find((option) => option.value === lucky1)?.label}</p>
              </div>
              <div className="pb-2">
                <Label className="text-xl">ความปรารถนา2</Label>
                <p>{options.find((option) => option.value === lucky2)?.label}</p>
              </div>
              <div className="pb-2">
                <Label className="text-xl">ความปรารถนา3</Label>
                <p>{options.find((option) => option.value === lucky3)?.label}</p>
              </div>
              <div className="pb-2">
                <Label className="text-xl">คำจีน 8 คำ</Label>
                <p>{chainaOptions.find((option) => option.value === chaina)?.label}</p>
              </div>
            </CardContent>
          </Card> */}
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-base">ชื่อ - นามสกุล</CardTitle>
              <CardDescription className="text-base font-medium">{name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-semibold text-base">วันเกิด</h2>
                  <p>{birthday ? format(birthday, 'd MMMM yyyy', { locale: th }) : ''}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-semibold text-base">ชุดเลขมงคล</h2>
                  <p>{numberOption.find((option) => option.value === number)?.label}</p>
                </div>
              </div>

              <div className=" -mx-6 px-6 py-4 border-y">
                <h2 className="font-semibold text-base flex items-center mb-2">
                  <Star className="h-5 w-5 text-purple-500 mr-2" />
                  ความปรารถนา
                </h2>
                <div className="space-y-2 pl-7">
                  <div className="bg-white p-2 rounded-md shadow-md">
                    <p>{options.find((option) => option.value === lucky1)?.label}</p>
                  </div>
                  <div className="bg-white p-2 rounded-md shadow-md">
                    <p>{options.find((option) => option.value === lucky2)?.label}</p>
                  </div>
                  <div className="bg-white p-2 rounded-md shadow-md">
                    <p>{options.find((option) => option.value === lucky3)?.label}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div className="relative">
                  <h2 className="font-semibold text-base">คำจำ 8 คำ</h2>
                  <p>{chainaOptions.find((option) => option.value === chaina)?.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-5">
          {/* <Link href={"/qr-payment"}> */}
          <Button
            className="bg-[#F5C724] text-background shadow-lg h-[50px] w-[300px] rounded-md text-xl"
            onClick={() => {
              setIsLoading(true)
              onClickStep2()
            }}
          >
            ราคา <s>399</s>บาท ส่วนลด ฟรี
          </Button>
          {/* </Link> */}
        </div>
      </div>
      </>
    )
  }

  if (step === 3) {
    return (
      <>
      <HeaderApp />
      <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Scan QR Code to Pay</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
                {!isTimerExpired && (
                    <Timer initialTime={300} onTimeout={() => setIsTimerExpired(true)} />
                )}
                {!isTimerExpired && (
                    <>
                        <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                            <QRCode
                                size={256}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                value="786025a3-2fab-417b-ba9a-d15799cc497b"
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                        <p className="mt-4 text-center">
                            Amount: 399 บาท<br />
                            วอลเปเปอร์
                        </p>
                        {/* <SumbitPayment isTimerExpired={isTimerExpired} paymentId="786025a3-2fab-417b-ba9a-d15799cc497b" /> */}
                    </>
                )}
                <div className="text-center mt-4">
                  <Button 
                    onClick={handleSimulatePayment}
                    disabled={checkingPayment}
                    className="flex items-center gap-2"
                  >
                    {checkingPayment ? (
                      <>
                        <Loader2 className="animate-spin w-4 h-4" />
                        กำลังตรวจสอบ...
                      </>
                    ) : (
                      "Simulate Payment"
                    )}
                  </Button>
                </div>
            </CardContent>
            <CardFooter className="text-sm text-gray-500 text-center">
                Payment ID: 786025a3-2fab-417b-ba9a-d15799cc497b
            </CardFooter>
        </Card> 
        </div>
      </>
    )
  }
  if (step === 4) {
    return (
      <>
      <HeaderApp />
      {isLoading && <LoadingOverlay />}
        {/* <div className="flex flex-col items-center py-10">
          <Image src={`${imageURL}`} alt="12 zodiac" width={250} height={0} />
          <div className="mt-5">
            <Button
              className="bg-[#5CC24F] hover:bg-[#539c49] text-background shadow-lg h-[50px] w-[300px] rounded-full text-xl"
              onClick={() => {sendImageToUser()  
                // setIsLoading(true)
                // const link = document.createElement('a')
                // link.href = imageURL
                // link.download = `12zodiac_${id}.jpg`
                // document.body.appendChild(link)
                // link.click()
                // document.body.removeChild(link)
                // setIsLoading(false)
              }}
            >
              ส่งวอลเปเปอร์เข้า LINE 
            </Button>
          </div>
        </div> */}
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <Card className="w-full max-w-md text-center shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">🎉 ขอขอบคุณ!</CardTitle>
              <CardDescription>การชำระเงินของคุณเสร็จสมบูรณ์</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg">
                กรุณารอรับวอลเปเปอร์ของคุฯได้ที่ LINE<br />
                ภายใน 1-2 วันทำการ
              </p>
              {/* <Button
              className="bg-[#5CC24F] hover:bg-[#539c49] text-background shadow-lg h-[50px] w-[300px] rounded-full text-xl mt-4"
              onClick={() => {sendImageToUser()}}
            >
              ส่งวอลเปเปอร์เข้า LINE 
            </Button> */}
            
            </CardContent>
          </Card>
          </motion.div>
        </div>
       
      </>
    )
  }

  return (
    <>
    <HeaderApp />
    <div className="flex flex-col items-center ">
      {isLoading && <LoadingOverlay />}
      <Image src={`/wallpaper/12zodiac/bg/${id}.jpg`} alt="12 zodiac" width={250} height={0} />

      <Card className="mt-5 py-5 px-10 border-none shadow-2xl">
        <CardContent>
          <div className="flex flex-col gap-4">
            <Label htmlFor="txtName">
              ชื่อ - นามสกุล <span className="text-red-700">*</span>
            </Label>
            <Input type="text" id="txtName" placeholder="ชื่อ - นามสกุล" onChange={(e) => setName(e.target.value)} />
            <Label htmlFor="txt-birthday">
              วันเกิด <span className="text-red-700">*</span>
            </Label>
            <DateTimePicker hideTime value={birthday} onChange={setBirthday} max={maxDate} locale={th} />
            <Label htmlFor="select-lucky1">
              ชุดเลขมงคล <span className="text-red-700">*</span>
            </Label>
            <Select onValueChange={handleSelectNumber}>
              <SelectTrigger className="w-[100%]" id="select-lucky1">
                <SelectValue placeholder="เลือกความปรารถนา" />
              </SelectTrigger>
              <SelectContent>
                {numberOption.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Label htmlFor="select-lucky1">
              ความปรารถนา1 <span className="text-red-700">*</span>
            </Label>
            <Select onValueChange={handleSelectLucky1}>
              <SelectTrigger className="w-[100%]" id="select-lucky1">
                <SelectValue placeholder="เลือกความปรารถนา" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Label htmlFor="select-lucky2">
              ความปรารถนา2 <span className="text-red-700">*</span>
            </Label>
            <Select onValueChange={handleSelectLucky2}>
              <SelectTrigger className="w-[100%]" id="select-lucky2">
                <SelectValue placeholder="เลือกความปรารถนา" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Label htmlFor="select-lucky2">
              ความปรารถนา3 <span className="text-red-700">*</span>
            </Label>
            <Select onValueChange={handleSelectLucky3}>
              <SelectTrigger className="w-[100%]" id="select-lucky2">
                <SelectValue placeholder="เลือกความปรารถนา" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Label htmlFor="select-lucky2">
              คำจีน 8 คำ <span className="text-red-700">*</span>
            </Label>
            <Select onValueChange={handleSelectChaina}>
              <SelectTrigger className="w-[100%]" id="select-lucky2">
                <SelectValue placeholder="เลือกความปรารถนา" />
              </SelectTrigger>
              <SelectContent>
                {chainaOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      <div className="mt-5">
        <Button
          className="bg-[#F5C724] text-background shadow-lg h-[50px] w-[300px] rounded-md text-xl"
          onClick={() => {setIsLoading(true)
            onClickStep1()
            setIsLoading(false)
          }
            }
        >
          ตกลง
        </Button>
      </div>
    </div>
    </>
  )
}
