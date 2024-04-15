import { useState } from 'react';
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

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

const ReadingCardSlider = ({ books, changeState }) => {
  console.log(books);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? books.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === books.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  const changeBookState = () => {
    changeState(books[currentIndex]?.id);
    setCurrentIndex(0);
  };

  const slideStylesWidthBackground = books[currentIndex]?.imgUrl;
  const bookTitle = books[currentIndex]?.title;
  const recommendationDate = books[currentIndex]?.recommendationDate;
  const pagesRead = books[currentIndex]?.pagesRead;
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
        ></Box>
        <Flex h={'95%'} direction={'column'} justifyContent={'space-between'}>
          <Text wordBreak={'break-word'}>
            {bookTitle}
            <br /> recomendado el: {recommendationDate}
          </Text>
          <Text wordBreak={'break-word'}>Iniciado el: {startDate}</Text>
          <Flex justifyContent={'space-between'}>
            paginas leidas:
            {
              <NumberInput w={'65px'} size='xs' defaultValue={pagesRead}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            }
          </Flex>

          <Button w={'140px'} onClick={changeBookState}>
            libro terminado!!!
          </Button>
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
    </Flex>
  );
};

export default ReadingCardSlider;
