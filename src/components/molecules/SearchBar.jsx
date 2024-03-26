import InputSelect from '../atoms/InputSelect';
import InputSearch from '../atoms/InputSearch';
import ButtomIO from '../atoms/ButtonIO';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

const SearchBar = ({ searchParameter, inputRef, setSearchFlag }) => {
  return (
    <Flex
      as={'span'}
      wrap={'wrap'}
      justifyContent={'center'}
      width={'100%'}
      h={'30%'}
      gap={'4px'}
      padding={'2px'}
    >
      <InputSelect searchParameter={searchParameter} />
      <ButtomIO
        buttontext={'Buscar sugerencias'}
        handleButtonClick={setSearchFlag}
      />
      <InputSearch inputRef={inputRef} />
    </Flex>
  );
};
export default SearchBar;
