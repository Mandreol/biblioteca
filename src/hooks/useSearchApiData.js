const useSearchApiData = ({ data }) => {
  const dataValue = data?.filter((objeto) => 'cover_i' in objeto);

  return dataValue;
};

export default useSearchApiData;
