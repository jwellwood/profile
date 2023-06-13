export const getLanguage = (context: string, data: any) => {
  const objArray = Object.entries(data);
  const mapped = objArray.map((item) => {
    const langKey = item[1] as any;
    if (typeof langKey === 'object') {
      return {
        [item[0]]: langKey[context],
      };
    }
    return { [item[0]]: item[1] };
  });
  return Object.assign({}, ...mapped);
};
