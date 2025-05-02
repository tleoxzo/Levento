import path from 'path'
import sharp from 'sharp'
import fs from 'fs'
import { createCanvas, loadImage } from 'canvas'
import { randomUUID } from 'crypto'

export const POST = async (req: Request) => {
  // const { birthday, name, lucky1, lucky2, lucky3, productName, wallpaperId } = await req.json()
  const { name, lucky1, lucky2, lucky3, chaina, number, productName, wallpaperId } = await req.json()
  const bg_1 = '/bg/bg-1.png'
  const products = [
    {
      productName: '12zodiac',
      layers: [
        {
          id: '1',
          path: '/bg/1.jpg'
        },
        {
          id: '2',
          path: '/bg/2.jpg'
        },
        {
          id: '3',
          path: '/bg/3.jpg'
        },
        {
          id: '4',
          path: '/bg/4.jpg'
        },
        {
          id: '5',
          path: '/bg/5.jpg'
        },
        {
          id: '6',
          path: '/bg/6.jpg'
        },
        {
          id: '7',
          path: '/bg/7.jpg'
        },
        {
          id: '8',
          path: '/bg/8.jpg'
        },
        {
          id: '9',
          path: '/bg/9.jpg'
        },
        {
          id: '10',
          path: '/bg/10.jpg'
        },
        {
          id: '11',
          path: '/bg/11.jpg'
        },
        {
          id: '12',
          path: '/bg/12.jpg'
        }
      ],
      luckys1: [
        { id: '1', path: '/select/new/left/1.png' },
        { id: '2', path: '/select/new/left/2.png' },
        { id: '3', path: '/select/new/left/3.png' },
        { id: '4', path: '/select/new/left/4.png' },
        { id: '5', path: '/select/new/left/5.png' },
        { id: '6', path: '/select/new/left/6.png' },
        { id: '7', path: '/select/new/left/7.png' },
        { id: '8', path: '/select/new/left/8.png' },
        { id: '9', path: '/select/new/left/9.png' },
        { id: '10', path: '/select/new/left/10.png' },
        { id: '11', path: '/select/new/left/11.png' },
        { id: '12', path: '/select/new/left/12.png' },
        { id: '13', path: '/select/new/left/13.png' },
        { id: '14', path: '/select/new/left/14.png' },
        { id: '15', path: '/select/new/left/15.png' }
      ],
      luckys2: [
        { id: '1', path: '/select/new/center/1.png' },
        { id: '2', path: '/select/new/center/2.png' },
        { id: '3', path: '/select/new/center/3.png' },
        { id: '4', path: '/select/new/center/4.png' },
        { id: '5', path: '/select/new/center/5.png' },
        { id: '6', path: '/select/new/center/6.png' },
        { id: '7', path: '/select/new/center/7.png' },
        { id: '8', path: '/select/new/center/8.png' },
        { id: '9', path: '/select/new/center/9.png' },
        { id: '10', path: '/select/new/center/10.png' },
        { id: '11', path: '/select/new/center/11.png' },
        { id: '12', path: '/select/new/center/12.png' },
        { id: '13', path: '/select/new/center/13.png' },
        { id: '14', path: '/select/new/center/14.png' },
        { id: '15', path: '/select/new/center/15.png' }
      ],
      luckys3: [
        { id: '1', path: '/select/new/right/1.png' },
        { id: '2', path: '/select/new/right/2.png' },
        { id: '3', path: '/select/new/right/3.png' },
        { id: '4', path: '/select/new/right/4.png' },
        { id: '5', path: '/select/new/right/5.png' },
        { id: '6', path: '/select/new/right/6.png' },
        { id: '7', path: '/select/new/right/7.png' },
        { id: '8', path: '/select/new/right/8.png' },
        { id: '9', path: '/select/new/right/9.png' },
        { id: '10', path: '/select/new/right/10.png' },
        { id: '11', path: '/select/new/right/11.png' },
        { id: '12', path: '/select/new/right/12.png' },
        { id: '13', path: '/select/new/right/13.png' },
        { id: '14', path: '/select/new/right/14.png' },
        { id: '15', path: '/select/new/right/15.png' }
      ],
      chaina: [
        { id: '1', path: '/select/new/right-chaina/1.png' },
        { id: '2', path: '/select/new/right-chaina/2.png' },
        { id: '3', path: '/select/new/right-chaina/3.png' },
        { id: '4', path: '/select/new/right-chaina/4.png' },
        { id: '5', path: '/select/new/right-chaina/5.png' },
        { id: '6', path: '/select/new/right-chaina/6.png' },
        { id: '7', path: '/select/new/right-chaina/7.png' },
        { id: '8', path: '/select/new/right-chaina/8.png' }
      ],
      number: [
        { id: '1', path: '/select/new/number/1.png' },
        { id: '2', path: '/select/new/number/2.png' },
        { id: '3', path: '/select/new/number/3.png' },
        { id: '4', path: '/select/new/number/4.png' },
        { id: '5', path: '/select/new/number/5.png' },
        { id: '6', path: '/select/new/number/6.png' },
        { id: '7', path: '/select/new/number/7.png' },
        { id: '8', path: '/select/new/number/8.png' },
        { id: '9', path: '/select/new/number/9.png' },
        { id: '10', path: '/select/new/number/10.png' },
        { id: '11', path: '/select/new/number/11.png' },
        { id: '12', path: '/select/new/number/12.png' },
        { id: '13', path: '/select/new/number/13.png' },
        { id: '14', path: '/select/new/number/14.png' },
        { id: '15', path: '/select/new/number/15.png' },
        { id: '16', path: '/select/new/number/16.png' },
        { id: '17', path: '/select/new/number/17.png' },
        { id: '18', path: '/select/new/number/18.png' },
        { id: '19', path: '/select/new/number/19.png' },
        { id: '20', path: '/select/new/number/20.png' },
        { id: '21', path: '/select/new/number/21.png' },
        { id: '22', path: '/select/new/number/22.png' },
        { id: '23', path: '/select/new/number/23.png' },
        { id: '24', path: '/select/new/number/24.png' },
        { id: '25', path: '/select/new/number/25.png' },
        { id: '26', path: '/select/new/number/26.png' },
        { id: '27', path: '/select/new/number/27.png' },
        { id: '28', path: '/select/new/number/28.png' },
        { id: '29', path: '/select/new/number/29.png' },
        { id: '30', path: '/select/new/number/30.png' }
      ],
      day: [
        { id: '0', path: '/select/day/0.png' },
        { id: '1', path: '/select/day/1.png' },
        { id: '2', path: '/select/day/2.png' },
        { id: '3', path: '/select/day/3.png' },
        { id: '4', path: '/select/day/4.png' },
        { id: '5', path: '/select/day/5.png' },
        { id: '6', path: '/select/day/6.png' }
      ]
    }
  ]

  try {
    if (!wallpaperId) {
      return Response.json({ error: 'Missing image' }, { status: 400 })
    }

    if (!products.find((product) => product.productName === productName)) {
      return Response.json({ error: 'Invalid product' }, { status: 400 })
    }

    // fiilter product by productName
    const product = products.find((product) => product.productName === productName)

    const imageBase = product?.layers.find((layer) => layer.id === wallpaperId)?.path

    const imgLayer1 = product?.luckys1.find((lucky) => lucky.id === lucky1)?.path
    const imgLayer2 = product?.luckys2.find((lucky) => lucky.id === lucky2)?.path
    const imgLayer3 = product?.luckys3.find((lucky) => lucky.id === lucky3)?.path
    // const imgLayer3 = product?.luckys3.find((lucky) => lucky.id === lucky3)?.path
    const imgLayerchaina = product?.chaina.find((lucky) => lucky.id === chaina)?.path
    const imgLayerNumber = product?.number.find((lucky) => lucky.id === number)?.path

    // get day monday - sunday
    // const dayLayer = product?.day.find((day) => day.id === new Date(birthday).getDay().toString())?.path

    if (!imageBase || !imgLayer1 || !imgLayer2 || !imgLayer3 || !imgLayerchaina || !imgLayerNumber) {
      return Response.json({ error: 'Invalid image layers' }, { status: 400 })
    }

    const imagePath1 = path.join(process.cwd(), 'public', 'wallpaper', productName, imageBase)
    const imagePathBg_1 = path.join(process.cwd(), 'public', 'wallpaper', productName, bg_1)
    const imagePath2 = path.join(process.cwd(), 'public', 'wallpaper', productName, imgLayer1)
    const imagePath3 = path.join(process.cwd(), 'public', 'wallpaper', productName, imgLayer2)
    const imagePath4 = path.join(process.cwd(), 'public', 'wallpaper', productName, imgLayer3)
    const imagePathChaina = path.join(process.cwd(), 'public', 'wallpaper', productName, imgLayerchaina)
    const imagePathNumber = path.join(process.cwd(), 'public', 'wallpaper', productName, imgLayerNumber)

    // const imagePath4 = dayLayer ? path.join(process.cwd(), 'public', 'wallpaper', productName, dayLayer) : ''

    const image1Buffer = fs.readFileSync(imagePath1)
    const imageBg_1Buffer = fs.readFileSync(imagePathBg_1)
    const image2Buffer = fs.readFileSync(imagePath2)
    const image3Buffer = fs.readFileSync(imagePath3)
    const image4Buffer = fs.readFileSync(imagePath4)
    const imageChainaBuffer = fs.readFileSync(imagePathChaina)
    const imageNumberBuffer = fs.readFileSync(imagePathNumber)

    const baseMetadata = await sharp(image1Buffer).metadata()

    const combinedImageBuffer = await sharp(image1Buffer)
      .composite([
        {
          input: await sharp(imageBg_1Buffer).resize(baseMetadata.width, baseMetadata.height).toBuffer(),
          gravity: 'center'
        },
        {
          input: await sharp(image2Buffer).resize(baseMetadata.width, baseMetadata.height).toBuffer(),
          gravity: 'center'
        },
        {
          input: await sharp(image3Buffer).resize(baseMetadata.width, baseMetadata.height).toBuffer(),
          gravity: 'center'
        },
        {
          input: await sharp(image4Buffer).resize(baseMetadata.width, baseMetadata.height).toBuffer(),
          gravity: 'center'
        },
        {
          input: await sharp(imageChainaBuffer).resize(baseMetadata.width, baseMetadata.height).toBuffer(),
          gravity: 'center'
        },
        {
          input: await sharp(imageNumberBuffer).resize(baseMetadata.width, baseMetadata.height).toBuffer(),
          gravity: 'center'
        }
      ])
      .toBuffer()

    if (!baseMetadata.width || !baseMetadata.height) {
      throw new Error('Invalid image metadata')
    }
    const canvas = createCanvas(baseMetadata.width, baseMetadata.height)
    const div = canvas.getContext('2d')

    const combinedImage = await loadImage(combinedImageBuffer)
    div.drawImage(combinedImage, 0, 0)

    // div.fillStyle = 'red'
    // div.fillRect(1263, 161, 276, 651)

    // div.strokeStyle = 'white'
    // div.lineWidth = 3
    // div.strokeRect(1263, 161, 276, 651)

    div.fillStyle = '#FFFFFF'
    div.textAlign = 'center'
    div.textBaseline = 'bottom'

    const textX = 1263 + 276 / 2 // กึ่งกลางแนวนอน
    const textY = 161 + 651 + 15 // ขอบล่างของกรอบ - 10px
    // นันทวัฒน์ คำโท
    if (name.length > 14) {
      div.font = 'bold 35px "Prompt"'
    } else {
      div.font = 'bold 40px "Prompt"'
    }
    div.fillText(name, textX, textY)
    console.log('canvas:', canvas)
    const finalImageBuffer = canvas.toBuffer('image/jpeg')

    // return Response.json({
    //   imageUrl: `/uploads/${filename}`
    // })

    // return new Response(finalImageBuffer, {
    //   headers: {
    //     'Content-Type': 'image/jpeg',
    //     'Content-Disposition': 'attachment; filename=' + productName + '_' + wallpaperId + '.jpg"'
    //   }
    // })
    const filename = `${productName}_${wallpaperId}_${randomUUID()}.jpg`
    const outputPath = path.join(process.cwd(), 'public', 'uploads', filename)
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, finalImageBuffer)

    // ส่ง URL ของภาพกลับไปยัง client
    return Response.json({
      imageUrl: `/uploads/${filename}`
    })

  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to generate image' })
  }
}

