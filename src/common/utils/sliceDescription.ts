export const sliceDescription = (str?: string) => {
  return str ? `${str?.slice(0, 120)}...` : 'Описание отсутсвует';
};