const useSearchApiData = ({ ApiData, searchParameter }) => {
  const dataValue = ApiData?.map((e) => e[searchParameter]);
  return [dataValue];
};

export default useSearchApiData;
