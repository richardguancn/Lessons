import https from 'https';
import fs from 'fs';
import path from 'path';

const downloadImage = (url: string, filepath: string) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

const images = [
  {
    name: 'banner1.jpg',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
  },
  {
    name: 'banner2.jpg',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
  },
  {
    name: 'wechat-qr.jpg',
    url: 'https://via.placeholder.com/200x200.png?text=WeChat+QR'
  },
  {
    name: 'qq-qr.jpg',
    url: 'https://via.placeholder.com/200x200.png?text=QQ+QR'
  }
];

const downloadImages = async () => {
  const publicDir = path.join(process.cwd(), 'public', 'images');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const image of images) {
    const filepath = path.join(publicDir, image.name);
    try {
      await downloadImage(image.url, filepath);
      console.log(`Downloaded ${image.name}`);
    } catch (err) {
      console.error(`Error downloading ${image.name}:`, err);
    }
  }
};

downloadImages(); 