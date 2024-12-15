// 处理资源路径
export const getAssetPath = (path: string): string => {
  const basePath = import.meta.env.DEV ? '' : '/Lessons';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}; 