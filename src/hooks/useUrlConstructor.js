import { useEffect, useState } from 'react';

const useUrlConstructor = (URL_BASE, PARAM) => {
  const [URL, setURL] = useState('');

  useEffect(() => {
    const trimParams = PARAM.trim().replaceAll(' ', '+');
    const constructedURL = `${URL_BASE}${trimParams}`;
    setURL(constructedURL);
  }, [URL_BASE, PARAM]);

  return [URL];
};

export default useUrlConstructor;
