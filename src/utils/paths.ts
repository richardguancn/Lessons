// 新建一个工具文件来处理路径
export const getAssetPath = (path: string): string => {
  // 移除开头的斜杠
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.DEV ? '/' : './'}${cleanPath}`;
}; 