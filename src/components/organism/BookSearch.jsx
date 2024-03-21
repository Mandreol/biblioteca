import SearchBar from '../molecules/SearchBar';
import SuggestionCard from '../molecules/SuggestionCard';
import SuggestionsList from '../molecules/suggestionsList';
import '../../styles/oranism/BookSearch.css';

const BASE_URL = 'https://openlibrary.org/';

const BookSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParameter, setSearchParameter] = useState('search.json?q=');
  const [URL] = useUrlConstructor(URL_BASE, searchParameter, inputValue);
  const [selectedInput, setSelectedInput] = useState();
  const IMG_URL = useUrlConstructor(
    BASE_URL,
    'id/',
    `${selectedInput.cover_i}-L.jpg`
  );
  let param = searchParameter === 'search/authors.json?q=' ? 'name' : 'title';
  let dataFilter = useSearchApiData({ data });

  function fechtData(URL) {
    return useApi(URL);
  }
  const { data, error, loading } = fechtData(URL);

  return (
    <section>
      <SearchBar
        handleSearchParameterValue={setSearchParameter}
        handleInputChange={setInputValue}
        inputValue={inputValue}
        handleFuntion={fechtData}
      />
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <SuggestionsList
        data={dataFilter}
        param={param}
        handlSetectedInput={setSelectedInput}
      />
      <SuggestionCard
        IMG_URL={IMG_URL}
        text={text}
        buttontext={'Agregar a lista de lectura'}
        handleFuntion
      />
    </section>
  );
};

export default BookSearch;
