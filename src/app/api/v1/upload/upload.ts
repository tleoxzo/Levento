import { NextApiRequest, NextApiResponse } from 'next';
import { File as FormidableFile, IncomingForm } from 'formidable';
// import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new IncomingForm({
    uploadDir: './public/uploads',
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Upload failed' });
    }

    const image = files.image;

    // เช็คว่าไฟล์มีค่าหรือไม่ และจัดการทั้งกรณีเป็น array กับ object เดี่ยว
    let file: FormidableFile | null = null;
    if (Array.isArray(image)) {
      file = image[0];
    } else if (image) {
      file = image;
    }

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = `/uploads/${file.newFilename}`;
    return res.status(200).json({ url: filePath });
  });
}
