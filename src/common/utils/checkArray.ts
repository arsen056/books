export const checkArray = (prop: string, how: 'one' | 'all',  array?: string[], ) => {
  switch (how) {
  case 'one':
    return array ? `${prop}: ${array[0]}` : '';
  default:
    return array ? `${prop}: ${array?.map(e => `${e}`).join(', ')}` : '';
  }
};