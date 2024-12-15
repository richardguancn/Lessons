import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import Layout from './layouts/MainLayout';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout />
    </ConfigProvider>
  );
}

export default App; 