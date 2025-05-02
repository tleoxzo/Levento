'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Moo12Zodiac = () => {
  const [buy, setBuy] = useState(false)
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [buy])

  // const handleBuy = () => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setBuy(true)
  //     setLoading(false)
  //   }, 3000)
  // }
  // if (loading) {
  //   return <Loading />
  // }

  if (buy) {
    const btn = [
      {
        id: 1,
        name: 'ปีชวด ฟรี',
        url: '/wallpaper/12zodiac/b/1.png',
        hoverurl: '/wallpaper/12zodiac/b/1.1.png'
      },
      {
        id: 2,
        name: 'ปีฉลู ฟรี',
        url: '/wallpaper/12zodiac/b/2.png',
        hoverurl: '/wallpaper/12zodiac/b/2.1.png'
      },
      {
        id: 3,
        name: 'ปีขาล ฟรี',
        url: '/wallpaper/12zodiac/b/3.png',
        hoverurl: '/wallpaper/12zodiac/b/3.1.png'
      },
      {
        id: 4,
        name: 'ปีเถาะ ฟรี',
        url: '/wallpaper/12zodiac/b/4.png',
        hoverurl: '/wallpaper/12zodiac/b/4.1.png'
      },
      {
        id: 5,
        name: 'ปีมะโรง ฟรี',
        url: '/wallpaper/12zodiac/b/5.png',
        hoverurl: '/wallpaper/12zodiac/b/5.1.png'
      },
      {
        id: 6,
        name: 'ปีมะเส็ง ฟรี',
        url: '/wallpaper/12zodiac/b/6.png',
        hoverurl: '/wallpaper/12zodiac/b/6.1.png'
      },
      {
        id: 7,
        name: 'ปีมะเมีย ฟรี',
        url: '/wallpaper/12zodiac/b/7.png',
        hoverurl: '/wallpaper/12zodiac/b/7.1.png'
      },
      {
        id: 8,
        name: 'ปีมะแม ฟรี',
        url: '/wallpaper/12zodiac/b/8.png',
        hoverurl: '/wallpaper/12zodiac/b/8.1.png'
      },
      {
        id: 9,
        name: 'ปีวอก ฟรี',
        url: '/wallpaper/12zodiac/b/9.png',
        hoverurl: '/wallpaper/12zodiac/b/9.1.png'
      },
      {
        id: 10,
        name: 'ปีระกา ฟรี',
        url: '/wallpaper/12zodiac/b/10.png',
        hoverurl: '/wallpaper/12zodiac/b/10.1.png'
      },
      {
        id: 11,
        name: 'ปีจอ ฟรี',
        url: '/wallpaper/12zodiac/b/11.png',
        hoverurl: '/wallpaper/12zodiac/b/11.1.png'
      },
      {
        id: 12,
        name: 'ปีกุน ฟรี',
        url: '/wallpaper/12zodiac/b/12.png',
        hoverurl: '/wallpaper/12zodiac/b/12.1.png'
      }
    ]
    return (
      <>
        <div className="flex flex-col items-center py-10 bg-[#2f1c1c] ">
          <div className="">
            {btn.map((item, index) => (
              <Image
                key={index}
                src={item.url}
                alt={item.name}
                width={450}
                height={200}
                onClick={() => router.push('/wallpaper/moo-12zodiac/select/' + item.id)}
                className="hover:shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
    <div className="flex flex-col items-center py-10 bg-[#151515] bg-[url('/wallpaper/bg/bg-pd1.jpg')] bg-center bg-no-repeat bg-cover min-h-[80vh]">
      <div className="sec1">
        <Image src="/wallpaper/12zodiac/sec1.png" alt="12 zodiac" width={450} height={450} />
      </div>
      <div className="sec2">
        <Image src="/wallpaper/12zodiac/sec2.png" alt="12 zodiac" width={450} height={450} />
      </div>
      <div className="sec3">
        <Image src="/wallpaper/12zodiac/sec3.png" alt="12 zodiac" width={450} height={450} />
      </div>
      <div className="sec4">
        <Button
          className="bg-[#F5C724] text-background shadow-lg h-[50px] w-[300px] rounded-md text-lg"
          onClick={() => setBuy(true)}
          // onClick={handleBuy}
        >
          รับวอลเปเปอร์
        </Button>
      </div>
    </div>
    </>
  )
}
