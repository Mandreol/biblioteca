import PrincipalLayOut from './components/layOuts/PrincipalLayOut';
import { Container } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import useGetAllBooks from './hooks/backEndApiFucntions/useGetAllBooks';

function App() {
  const [data] = useGetAllBooks();
  console.log(data);

  return (
    <ChakraProvider>
      <Container
        as={'main'}
        centerContent={'true'}
        backgroundColor={'grey'}
        h={'100vh'}
        maxW='100vw'
        overflowY={'auto'}
      >
        <PrincipalLayOut />
      </Container>
    </ChakraProvider>
  );
}

export default App;
