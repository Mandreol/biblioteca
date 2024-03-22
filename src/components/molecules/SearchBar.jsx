import InputSelect from '../atoms/InputSelect';
import InputSearch from '../atoms/InputSearch';
import Buttom from '../atoms/Button';
import '../../styles/molecules/searchBar.css';

const SearchBar = ({
  handleSearchParameterValue,
  handleInputChange,
  inputValue,
  handleFuntion,
}) => {
  return (
    <div className='searchBar-container'>
      <InputSelect handleSearchParameterValue={handleSearchParameterValue} />
      <InputSearch
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
      <Buttom buttontext={'Buscar sugerencias'} handleFuntion={handleFuntion} />
    </div>
  );
};
export default SearchBar;
