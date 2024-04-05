import InputSearch from '../atoms/InputSearch';
import ButtonSearch from '../atoms/ButtonSearch';
import { Flex } from '@chakra-ui/react';

const SearchBar = ({ inputRef, setSearchFlag }) => {
  return (
    <Flex
      as={'span'}
      wrap={'wrap'}
      justifyContent={'space-around'}
      width={'100%'}
      gap={'4px'}
      padding={'2px'}
    >
      <InputSearch inputRef={inputRef} />
      <ButtonSearch
        buttontext={'Buscar sugerencias'}
        handleButtonClick={setSearchFlag}
      />
    </Flex>
  );
};
export default SearchBar;
