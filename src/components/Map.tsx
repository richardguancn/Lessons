import React from 'react';
import { Card, Button } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

interface MapProps {
  height?: string;
}

const Map: React.FC<MapProps> = ({ height = '300px' }) => {
  const mapImageUrl = "/images/map-static.jpg"; // 可以使用一张静态地图图片
  const mapLink = "https://amap.com/search?query=%E6%B7%B1%E5%9C%B3%E7%A7%91%E6%8A%80%E5%9B%AD&city=440300&geoobj=113.850735%7C22.382903%7C114.486582%7C22.725207&zoom=11.41";

  return (
    <div style={{ height, width: '100%', position: 'relative' }}>
      <div
        style={{
          height: '100%',
          background: `url(${mapImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          filter: 'grayscale(20%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center'
        }}
      >
        <Button
          type="primary"
          icon={<EnvironmentOutlined />}
          size="large"
          href={mapLink}
          target="_blank"
        >
          在地图中查看
        </Button>
      </div>
    </div>
  );
};

export default Map; 