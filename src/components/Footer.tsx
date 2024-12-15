import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  return (
    <AntFooter>
      <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
        © {new Date().getFullYear()} 麻雀软件科技 版权所有
      </Text>
    </AntFooter>
  );
};

export default Footer; 