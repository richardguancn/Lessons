import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/MainLayout'
import { routes } from './routes'
import 'antd/dist/reset.css'
import './styles/global.css'

// 创建路由配置
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  }
], {
  future: {
    v7_startTransition: true,  // 确保这个配置存在
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
});

// 使用 React 18 的 concurrent features
const root = ReactDOM.createRoot(document.getElementById('root')!);

// 使用 startTransition 包装整个应用
const App = () => {
  const [isPending, startTransition] = React.useTransition();

  React.useEffect(() => {
    startTransition(() => {
      // 路由更新会在这里被包装
    });
  }, []);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

root.render(<App />); 