import { useEffect, useState } from 'react';

const useUrlConstructor = (URL_BASE, searchParameter, param) => {
  const [URL, setURL] = useState('');

  useEffect(() => {
    if (param.length) {
      const trimParams = param.trim().replaceAll(' ', '+');
      const constructedURL = `${URL_BASE}${searchParameter}${trimParams}`;
      setURL(constructedURL);
    }
    return () => setURL('');
  }, [URL_BASE, param]);

  return [URL];
};

export default useUrlConstructor;
