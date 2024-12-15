// 新建一个工具文件来处理路径
export const getAssetPath = (path: string) => {
  const base = import.meta.env.DEV ? '' : '/Lessons';
  return `${base}${path}`;
}; 