const useSearchApiData = ({ data }) => {
  const filterData = data?.filter((objeto) => 'cover_i' in objeto);
  filterData?.filter((objeto) => 'author_name' in objeto);
  return filterData;
};

export default useSearchApiData;
