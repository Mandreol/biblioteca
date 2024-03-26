import { useEffect, useState } from 'react';

const useUrlConstructor = (URL_BASE, searchParameter, param) => {
  const [URL, setURL] = useState('');

  useEffect(() => {
    if (param) {
      const trimParams = param.trim().replaceAll(' ', '+');
      const constructedURL = `${URL_BASE}${searchParameter}${trimParams}`;
      setURL(constructedURL);
    }
  }, [URL_BASE, param, searchParameter]);

  return URL;
};

export default useUrlConstructor;
