import HeadingText from '../atoms/HeadingText';
import { Flex, Spacer } from '@chakra-ui/react';

const PrincipalHeader = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      h={'50px'}
      w={'100%'}
      as={'header'}
    >
      <HeadingText text={'Mi lista de lectura'} />
    </Flex>
  );
};

export default PrincipalHeader;
