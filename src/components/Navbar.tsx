import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, AppstoreOutlined, ProjectOutlined, TeamOutlined, FileOutlined, ContactsOutlined } from '@ant-design/icons';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    { 
      key: '/', 
      icon: <HomeOutlined />,
      label: <Link to="/">首页</Link> 
    },
    { 
      key: '/products', 
      icon: <AppstoreOutlined />,
      label: <Link to="/products">产品服务</Link> 
    },
    { 
      key: '/cases', 
      icon: <ProjectOutlined />,
      label: <Link to="/cases">成功案例</Link> 
    },
    { 
      key: '/about', 
      icon: <TeamOutlined />,
      label: <Link to="/about">关于我们</Link> 
    },
    { 
      key: '/news', 
      icon: <FileOutlined />,
      label: <Link to="/news">新闻动态</Link> 
    },
    { 
      key: '/contact', 
      icon: <ContactsOutlined />,
      label: <Link to="/contact">联系我们</Link> 
    },
  ];

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      width: '100%',
      height: '150px',
      maxWidth: '1920px',
      margin: '0 auto',
      padding: '0 120px',
    }}>
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={menuItems}
        style={{ 
          lineHeight: '150px',
          background: 'transparent',
          border: 'none',
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          marginLeft: '100px'
        }}
      />
    </div>
  );
};

export default Navbar; 