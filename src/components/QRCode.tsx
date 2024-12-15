import React from 'react';
import { Image } from 'antd';

interface QRCodeProps {
  url: string;
  size?: number;
}

const QRCode: React.FC<QRCodeProps> = ({ url, size = 120 }) => {
  return (
    <Image
      src={url}
      alt="QR Code"
      width={size}
      height={size}
      style={{ borderRadius: '8px' }}
      preview={false}
    />
  );
};

export default QRCode; 