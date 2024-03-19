import { useState } from 'react';

const SearchInput = ({ handleInputValue, handleSearchParameter }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchSubmit = () => {
    handleInputValue(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSearchParameterValue = (e) => {
    handleSearchParameter(e.target.value);
  };

  return (
    <span>
      <select onChange={handleSearchParameterValue}>
        <option value={'q='}>busqueda general</option>
        <option value={'title='}>buscar por título</option>
        <option value={'author_name='}>buscar por autor</option>
      </select>
      <input type='search' onChange={handleInputChange} />
      <button onClick={handleSearchSubmit}>buscar sugerencias</button>
    </span>
  );
};
export default SearchInput;
