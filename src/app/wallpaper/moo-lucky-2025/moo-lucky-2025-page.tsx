'use client'
import LoadingIcon from '@/components/icon/loadingIcon'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { DialogDescription } from '@radix-ui/react-dialog'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Billing from './_components/billing'

interface Wallpaper {
  id: number
  type: string
  url: string
  ref: string
  filename: string
  product_id: number
}

export const MooLucky2025 = () => {
  const router = useRouter()
  const { toast } = useToast()
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [lucky, setLucky] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([])
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>()
  const [selectedWallpaperLucky, setSelectedWallpaperLucky] = useState<Wallpaper | null>()
  const [loading, setLoading] = useState(false)
  const [loadingImg1, setLoadingImg1] = useState(false)

  const [billing, setBilling] = useState(false)
  const [wallpaperId, setWallpaperId] = useState('')

  const options = [
    {
      value: '246',
      label: 'เสริมเสน่ห์'
    },
    {
      value: '456',
      label: 'ค้าขาย'
    },
    {
      value: '396',
      label: 'ต่อยอดธุรกิจ'
    },
    {
      value: '789',
      label: 'โชคลาภมากมี'
    },
    {
      value: '156',
      label: 'การงานเด่น'
    },
    {
      value: '459',
      label: 'สุขภาพแข็งแรง'
    }
  ]

  const handleSelectLucky = (value: string) => {
    setLucky(value)
  }

  const submitWallpaper = (id: string) => {
    if (!name || !tel || !lucky) {
      toast({
        variant: 'destructive',
        title: 'เกิดข้อผิดพลาด !!',
        description: 'กรุณากรอกข้อมูลให้ครบถ้วน'
      })
      return
    } else {
      setWallpaperId(id)
      setBilling(true)
    }
  }

  const createWallpaper = (id: string) => {
    setSelectedWallpaper(wallpapers.find((v) => v.id == parseInt(id)))
    setSelectedWallpaperLucky(wallpapers.find((v) => v.ref == lucky))
    setLoadingImg1(true)

    fetch('/api/v1/profile', {
      method: 'POST',
      body: JSON.stringify({ name, tel })
    }).then((res: Response) => {
      if (!res.ok) {
        res.json().then((data: { error?: string }) => {
          toast({
            variant: 'destructive',
            title: 'เกิดข้อผิดพลาด !!',
            description: data?.error || 'กรุณาลองใหม่อีกครั้ง'
          })
        })
      } else {
        setOpenDialog(true)
      }
    })
  }

  const handdleDownload = async (imgLayer1: string, imgLayer2: string) => {
    setLoading(true)
    const response = await fetch('/api/v1/create-wallpaper', {
      method: 'POST',
      body: JSON.stringify({ imgLayer1, imgLayer2, filename: `moo100-${tel}` })
    })
    const imageBlob = await response.blob()
    const imageURL = URL.createObjectURL(imageBlob)
    const link = document.createElement('a')
    link.download = `moo100-${tel}.jpg`
    link.href = imageURL
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setLoading(false)
  }

  useEffect(() => {
    fetch('/api/v1/wallpaper')
      .then((res) => res.json())
      .then((data) => {
        setWallpapers(data)
      })
  }, [billing])

  if (billing) {
    return (
      <>
        <div className="m-5 sm:m-10 flex flex-col items-center">
          <Billing name={name} tel={tel} lucky={lucky} />
          <Button
            variant={'default'}
            className="w-full max-w-sm"
            onClick={() => {
              createWallpaper(wallpaperId)
              setBilling(false)
            }}
          >
            ยืนยัน
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="m-5 sm:m-10 flex flex-col items-center">
        <Breadcrumb className="my-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">หน้าหลัก</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>สร้าง Wallpaper</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="flex flex-col gap-4">
          <CardHeader>
            <CardTitle>เลือกภาพพื้นหลังที่ต้องการ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Label htmlFor="txtName">
                ชื่อ - นามสกุล <span className="text-red-700">*</span>
              </Label>
              <Input type="text" id="txtName" placeholder="ชื่อ - นามสกุล" onChange={(e) => setName(e.target.value)} />
              <Label htmlFor="txtTel">
                เบอร์โทร <span className="text-red-700">*</span>
              </Label>
              <Input type="tel" id="txtTel" placeholder="เบอร์โทร" onChange={(e) => setTel(e.target.value)} />
              <Label htmlFor="txtTel">
                เสริมดวง <span className="text-red-700">*</span>
              </Label>
              <Select onValueChange={handleSelectLucky}>
                <SelectTrigger className="w-[100%]" id="select-lucky">
                  <SelectValue placeholder="เลือกเสริมดวง" />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="max-w-xs mt-4 px-8">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true
                }}
                className="min-h-[380px]"
              >
                <CarouselContent>
                  {wallpapers
                    .filter((v) => v.type == 'base')
                    .map((wallpaper, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-4">
                              <span className="text-3xl">
                                <Image
                                  src={'/wallpaper/free/' + wallpaper.filename}
                                  width={150}
                                  height={150}
                                  alt="Wallpaper"
                                  priority
                                />
                                <p className="text-sm text-center py-2">
                                  {index + 1}/{wallpapers.filter((v) => v.type == 'base').length}
                                </p>
                                <Button
                                  variant="outline"
                                  onClick={() => submitWallpaper(wallpaper.id.toString())}
                                  className="w-full"
                                >
                                  เลือกพื้นหลัง
                                </Button>
                              </span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </CardContent>
        </Card>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="rounded-lg bg-white p-6 dark:bg-gray-950 max-h-[80vh] overflow-auto">
            <DialogHeader>
              <DialogTitle>Dowload Wallpaper</DialogTitle>
              <DialogDescription>
                ติดต่อ มูร้อยล้าน{' '}
                <Button variant={'link'} onClick={() => router.push('https://line.me/ti/p/%40moo100')}>
                  @moo100lan
                </Button>
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center">
              {loadingImg1 ? 'กำลังสร้าง Wallpaper โปรดรอสักครู่...' : ''}
              <div className="relative m-0 p-0">
                <Image
                  src={'/wallpaper/free/' + selectedWallpaper?.filename || ''}
                  width={0}
                  height={0}
                  layout="responsive"
                  sizes="width: 100%;"
                  alt="Wallpaper"
                  onLoad={() => {
                    setLoadingImg1(false)
                  }}
                />
                <Image
                  src={'/wallpaper/free/' + selectedWallpaperLucky?.filename || ''}
                  width={0}
                  height={0}
                  layout="responsive"
                  sizes="width: 100%;"
                  alt="Wallpaper Lucky"
                  className="absolute top-0 left-0"
                  hidden={loadingImg1}
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="default"
                onClick={() => {
                  handdleDownload(selectedWallpaper?.filename || '', selectedWallpaperLucky?.filename || '')
                }}
                className="w-full"
              >
                <LoadingIcon hidden={!loading} /> Download
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
