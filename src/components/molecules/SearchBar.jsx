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
    <div>
      <InputSelect handleSearchParameterValue={handleSearchParameterValue} />
      <InputSearch
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
      <Buttom text={'Buscar sugerencias'} handleFuntion={handleFuntion} />
    </div>
  );
};
export default SearchBar;
