import { Input } from '@chakra-ui/react';

const InputSearch = ({ inputRef }) => {
  const handleChange = (e) => {
    inputRef = e.target.value;
  };
  return (
    <Input
      ref={inputRef}
      type='search'
      onChange={handleChange}
      size='sm'
      maxW={'300px'}
    />
  );
};

export default InputSearch;
