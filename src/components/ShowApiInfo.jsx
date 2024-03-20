import { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import useUrlConstructor from '../hooks/useUrlConstructor';
import useApi from '../hooks/useApi';
import ListComponent from './ListComponent';
import SuggestionCard from './SuggestionCard';
import useSearchApiData from '../hooks/useSearchApiData';
const URL_BASE = 'https://openlibrary.org/';

const ShowApiInfo = () => {
  const [inputValue, SetInputValue] = useState('');
  const [searchParameter, setSearchParameter] = useState('search.json?q=');
  const [URL] = useUrlConstructor(URL_BASE, searchParameter, inputValue);
  const [selectedInput, setSelectedInput] = useState();
  const [data, error, loading] = useApi(URL);
  let param = searchParameter === 'search/authors.json?q=' ? 'name' : 'title';
  let dataFilter = useSearchApiData({ data });
  console.log(dataFilter);
  return (
    <section
      style={{ width: '100%', height: '100%', backgroundColor: 'green' }}
    >
      <SearchInput
        handleInputValue={SetInputValue}
        handleSearchParameter={setSearchParameter}
        setSelectedInput={setSelectedInput}
      />
      <p>{URL}</p>
      {loading && <p>cargando</p>}

      <div className='list-container'>
        {dataFilter?.map((e, i) => (
          <ListComponent
            key={i}
            data={e}
            param={param}
            handlSetectedInput={setSelectedInput}
          />
        ))}
        {selectedInput && <SuggestionCard data={selectedInput} />}
      </div>
    </section>
  );
};

export default ShowApiInfo;
