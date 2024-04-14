import { useState } from 'react';
import { Flex, Text, Box, Button } from '@chakra-ui/react';

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
    changeState(currentIndex);
  };

  const slideStylesWidthBackground = books[currentIndex]?.imgUrl;
  const bookTitle = books[currentIndex]?.title;
  const recommendationDate = books[currentIndex]?.recommendationDate;

  return (
    <Flex h={'95%'} direction={'column'}>
      <Flex w={'44vw'} h={'100%'} justifyContent='space-between'>
        <Arrow direction='left' onClick={goToPrevious} />
        <Flex h={'95%'} direction={'column'}>
          <Text>{bookTitle}</Text>
          <Text wordBreak={'break-word'}>
            recomendado el: {recommendationDate}
          </Text>
          <Button onClick={changeBookState}>Comenzar a leer</Button>
        </Flex>
        <Box
          width={'130px'}
          backgroundImage={`url(${slideStylesWidthBackground})`}
          backgroundSize={'contain'}
          backgroundPosition={'center'}
          backgroundRepeat={'no-repeat'}
        ></Box>
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
