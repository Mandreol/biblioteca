import { Select } from '@chakra-ui/react';

const InputSelect = ({ inputSelectRef }) => {
  const setParameter = (e) => {
    inputSelectRef = e.target.value;
    console.log(inputSelectRef);
  };
  return (
    <Select
      onChange={setParameter}
      size='sm'
      minW={'160px'}
      maxW={'25%'}
      ref={inputSelectRef}
    >
      <option value={'search.json?q='}>busqueda general</option>
      <option value={'search.json?title='}>buscar por título</option>
      <option value={'search/authors.json?q='}>buscar por autor</option>
    </Select>
  );
};

export default InputSelect;
