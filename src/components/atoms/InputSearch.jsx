import { Input } from '@chakra-ui/react';

const InputSearch = ({ inputRef, setFlag }) => {
  const handleChange = (e) => {
    inputRef = e.target.value;
  };
  const handleInputKey = (e) => {
    if (e.code === 'Enter') setFlag((prev) => !prev);
  };
  return (
    <Input
      ref={inputRef}
      type='search'
      onChange={handleChange}
      size='sm'
      maxW={'300px'}
      onKeyDown={handleInputKey}
    />
  );
};

export default InputSearch;
