import { useEffect, useState } from 'react';

const useUrlConstructor = (URL_BASE, param) => {
  const [URL, setURL] = useState('');

  useEffect(() => {
    if (param) {
      const trimParams = param.trim().replaceAll(' ', '+');
      const constructedURL = `${URL_BASE}${trimParams}`;
      setURL(constructedURL);
    }
  }, [URL_BASE, param]);

  return URL;
};

export default useUrlConstructor;
