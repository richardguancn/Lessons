import { Layout, ConfigProvider } from 'antd';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import zhCN from 'antd/locale/zh_CN';

const { Header, Content } = Layout;

const MainLayout = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout className="layout" style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <Header className="glass-header" style={{ 
          position: 'fixed', 
          width: '100%', 
          zIndex: 1,
          height: '150px',
          padding: '0',
          background: 'transparent',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}>
          <Navbar />
        </Header>
        <Content style={{ 
          padding: '0',
          marginTop: 150,
          minHeight: 'calc(100vh - 150px - 70px)'
        }}>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout; 