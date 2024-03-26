const useSearchApiData = ({ data }) => {
  const filterData = data?.filter((objeto) => 'cover_i' in objeto);

  return filterData;
};

export default useSearchApiData;
