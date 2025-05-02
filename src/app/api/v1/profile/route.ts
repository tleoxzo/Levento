import { prisma } from '@/lib/prisma'

export const POST = async (req: Request) => {
  const { name, tel } = await req.json()
  if (!name || !tel) {
    return Response.json({ error: 'กรุณากรอกข้อมูลให้ครบถ้วน' }, { status: 400 })
  }

  try {
    const profile = await prisma.profile.create({ data: { name, phone: tel } })
    return Response.json({ profile })
  } catch (error) {
    console.error(error)
    return Response.json({ error }, { status: 500 })
  }
}
