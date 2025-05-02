'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb'
import Image from 'next/image'

const luckyData = [
  { value: '246', label: 'เสริมเสน่ห์' },
  { value: '456', label: 'ค้าขาย' },
  { value: '396', label: 'ต่อยอดธุรกิจ' },
  { value: '789', label: 'โชคลาภมากมี' },
  { value: '156', label: 'การงานเด่น' },
  { value: '459', label: 'สุขภาพแข็งแรง' }
]
interface PageProps {
  name: string
  tel: string
  lucky: string
}

export default function Billing({ name, tel, lucky }: PageProps) {
  const luckyValue = luckyData.find((item) => item.value === lucky)?.label

  return (
    <div className="m-5 sm:m-10 flex flex-col items-center">
      <Image
        src="https://wuhiuwvfarqsrwwbcqsd.supabase.co/storage/v1/object/public/public-app/moo100-logo.png"
        alt="Moo100lan logo"
        width={1200}
        height={400}
        priority
        className="w-32 h-10"
      />
      <Breadcrumb className="my-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">หน้าหลัก</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/free-wallpaper">สร้าง Wallpaper</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>จ่ายเงิน</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="border-0 shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-medium">ยืนยันคำสั่งซื้อ Wallpaper</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">แบบฟอร์มรายละเอียดผู้สั่งซื้อ</p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="">
                <Label className="text-lg font-medium">ข้อมูลส่วนตัว</Label>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex justify-between">
                    <p>ชื่อ - นามสกุล</p>
                    <p>{name}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>เบอร์โทร</p>
                    <p>{tel}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>เสริมดวงด้าน</p>
                    <p>{luckyValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b" />

            <div>
              <Label className="text-lg font-medium">สรุปยอดสั่งซื้อรวมทั้งหมด</Label>
              <div className="mt-2">
                <div className="flex justify-between items-center py-2">
                  <span>Wallpaper</span>
                  <span>฿199.00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>ส่วนลด</span>
                  <span>- ฿199.00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t">
                  <span>รวมทั้งหมด</span>
                  <span>฿0.00</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
