import PrincipalLayOut from './components/layOuts/PrincipalLayOut';
import { Container } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Container
        as={'main'}
        centerContent={'true'}
        backgroundColor={'grey'}
        h={'100vh'}
        maxW='100vw'
      >
        <PrincipalLayOut />
      </Container>
    </ChakraProvider>
  );
}

export default App;
