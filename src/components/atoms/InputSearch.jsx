import '../../styles/atoms/inputSearch.css';

const InputSearch = ({ handleInputChange, inputValue }) => {
  const handleChange = (e) => {
    handleInputChange(e.target.value);
  };
  return <input type='search' onChange={handleChange} value={inputValue} />;
};

export default InputSearch;
