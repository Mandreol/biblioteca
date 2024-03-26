import { Select } from '@chakra-ui/react';

const InputSelect = ({ searchParameter }) => {
  const setParameter = (e) => {
    searchParameter = e.target.value;
  };
  return (
    <Select
      onChange={setParameter}
      size='sm'
      minW={'160px'}
      maxW={'25%'}
      ref={searchParameter}
    >
      <option value={'search.json?q='}>busqueda general</option>
      <option value={'search.json?title='}>buscar por título</option>
      <option value={'search/authors.json?q='}>buscar por autor</option>
    </Select>
  );
};

export default InputSelect;
