const useSearchApiData = ({ data, param }) => {
  const dataValue = data?.map((e) => e[param]);
  return dataValue;
};

export default useSearchApiData;
