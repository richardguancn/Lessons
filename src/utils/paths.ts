// 新建一个工具文件来处理路径
export const getAssetPath = (path: string): string => {
  return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
}; 