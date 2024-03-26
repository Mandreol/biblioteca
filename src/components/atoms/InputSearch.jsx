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
      w={'100%'}
      maxW={'250px'}
    />
  );
};

export default InputSearch;
