import '../../styles/atoms/inputSelect.css';

const InputSelect = ({ handleSearchParameterValue }) => {
  return (
    <select onChange={handleSearchParameterValue}>
      <option value={'search.json?q='}>busqueda general</option>
      <option value={'search.json?title='}>buscar por título</option>
      <option value={'search/authors.json?q='}>buscar por autor</option>
    </select>
  );
};

export default InputSelect;
