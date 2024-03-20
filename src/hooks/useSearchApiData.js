const useSearchApiData = ({ data, searchParameter }) => {
  let param = searchParameter === 'search/authors.json?q=' ? 'name' : 'title';

  const dataValue = data.docs?.map((e) => e[param]);
  const dataFilterValues = [];
  dataValue.map((e) => {
    if (!dataFilterValues.includes(e)) {
      dataFilterValues.push(e);
    }
  });

  return dataFilterValues;
};

export default useSearchApiData;
