import { useState } from 'react';
import { Flex, Text, Box, Button, Tooltip } from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import NotesPanel from '../molecules/NotesPanel';
import { useDisclosure } from '@chakra-ui/react';
import { AttachmentIcon, DeleteIcon } from '@chakra-ui/icons';
import { useSearchContext } from '../../contexts/SearchContextProvider';
const Arrow = ({ direction, onClick }) => (
  <Box
    fontSize='45px'
    color='#fff'
    zIndex='1'
    cursor='pointer'
    onClick={onClick}
    display={'flex'}
    alignItems={'center'}
  >
    {direction === 'left' ? '❰' : '❱'}
  </Box>
);

const Dot = ({ active, onClick }) => (
  <Box
    as='div'
    display='inline-block'
    margin='0 3px'
    cursor='pointer'
    fontSize='20px'
    color={active ? 'blue.500' : 'gray.400'}
    onClick={onClick}
  >
    ●
  </Box>
);

const ReadingCardSlider = ({ books, changeState, setPages }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { removeBook } = useSearchContext();
  const [pagesValue, setPagesValue] = useState(books[currentIndex].pagesRead);
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? books.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setPagesValue(books[newIndex].pagesRead);
  };

  const goToNext = () => {
    const newIndex = currentIndex === books.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setPagesValue(books[newIndex].pagesRead);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  const changeBookState = () => {
    changeState(books[currentIndex]?.id);
    setCurrentIndex(0);
  };
  const handleSetPages = (e) => {
    setPages(e, books[currentIndex].id);
    setPagesValue(e);
  };
  const deleteBook = () => {
    removeBook(books[currentIndex].id);
  };

  const slideStylesWidthBackground = books[currentIndex]?.imgUrl;
  const bookTitle = books[currentIndex]?.title;
  const recommendationDate = books[currentIndex]?.recommendationDate;
  const pagesRead = books[currentIndex].pagesRead;
  const startDate = books[currentIndex]?.startDate;

  return (
    <Flex h={'95%'} w={'100%'} direction={'column'}>
      <Flex h={'100%'} w={'100%'} justifyContent={'space-evenly'}>
        <Arrow direction='left' onClick={goToPrevious} />
        <Box
          width={'50%'}
          backgroundImage={`url(${slideStylesWidthBackground})`}
          backgroundSize={'contain'}
          backgroundPosition={'center'}
          backgroundRepeat={'no-repeat'}
        >
          <Tooltip label='Anotaciones' fontSize='md'>
            <AttachmentIcon
              boxSize={8}
              cursor={'pointer'}
              _hover={{ color: 'black' }}
              onClick={onOpen}
            />
          </Tooltip>
        </Box>
        <Flex
          h={'95%'}
          w={'50%'}
          padding={'5px'}
          direction={'column'}
          justifyContent={'space-between'}
        >
          <Text wordBreak={'break-word'}>{bookTitle}</Text>
          <Text wordBreak={'break-word'}>Iniciado el: {startDate}</Text>
          <Flex justifyContent={'space-between'}>
            pagina:
            {
              <NumberInput
                w={'65px'}
                size='xs'
                onChange={handleSetPages}
                value={pagesValue}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            }
          </Flex>
          <Flex
            justifyContent={'space-between'}
            alignContent={'center'}
            w={'100%'}
          >
            <Button
              justifySelf={'flex-end'}
              w={'150px'}
              onClick={changeBookState}
            >
              Libro terminado!!!
            </Button>
            <Tooltip label='Eliminar' fontSize='md'>
              <DeleteIcon
                boxSize={8}
                cursor={'pointer'}
                _hover={{ color: 'black' }}
                onClick={deleteBook}
              />
            </Tooltip>
          </Flex>
        </Flex>

        <Arrow direction='right' onClick={goToNext} />
      </Flex>
      <Flex justifyContent='center'>
        {books.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Flex>
      <NotesPanel
        isOpen={isOpen}
        onClose={onClose}
        notes={books[currentIndex].notes}
        bookId={books[currentIndex].id}
      />
    </Flex>
  );
};

export default ReadingCardSlider;
