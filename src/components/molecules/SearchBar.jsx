import InputSelect from '../atoms/InputSelect';
import InputSearch from '../atoms/InputSearch';
import ButtomIO from '../atoms/ButtonIO';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

const SearchBar = ({ inputSelectRef, inputRef }) => {
  return (
    <Flex
      as={'span'}
      wrap={'wrap'}
      justifyContent={'center'}
      width={'100%'}
      h={'20%'}
      gap={'4px'}
      padding={'2px'}
    >
      <InputSelect inputSelectRef={inputSelectRef} />
      <ButtomIO
        buttontext={'Buscar sugerencias'}
        // handleButtonClick={setSearchState}
      />
      <InputSearch inputRef={inputRef} />
    </Flex>
  );
};
export default SearchBar;
