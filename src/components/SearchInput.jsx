import { useState } from 'react';

const SearchInput = ({
  handleInputValue,
  handleSearchParameter,
  setSelectedInput,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchSubmit = () => {
    handleInputValue(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSearchParameterValue = (e) => {
    setInputValue('');
    setSelectedInput(null);
    handleSearchParameter(e.target.value);
    handleSearchSubmit();
  };

  return (
    <span>
      <select onChange={handleSearchParameterValue}>
        <option value={'search.json?q='}>busqueda general</option>
        <option value={'search.json?title='}>buscar por título</option>
        <option value={'search/authors.json?q='}>buscar por autor</option>
      </select>
      <input type='search' onChange={handleInputChange} value={inputValue} />
      <button onClick={handleSearchSubmit}>buscar sugerencias</button>
    </span>
  );
};
export default SearchInput;
