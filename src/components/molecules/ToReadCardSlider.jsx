import { useState } from 'react';
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

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

const ToReadCardSlider = ({ books, changeState }) => {
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
    changeState(books[currentIndex].id);
    setCurrentIndex(0);
  };

  const slideStylesWidthBackground = books[currentIndex]?.imgUrl;
  const bookTitle = books[currentIndex]?.title;
  const recommendationDate = books[currentIndex]?.recommendationDate;

  return (
    <Flex h={'95%'} w={'100%'} direction={'column'}>
      <Flex h={'100%'} w={'100%'} justifyContent={'space-evenly'}>
        <Arrow direction='left' onClick={goToPrevious} />
        <Box
          width={'40%'}
          backgroundImage={`url(${slideStylesWidthBackground})`}
          backgroundSize={'contain'}
          backgroundPosition={'center'}
          backgroundRepeat={'no-repeat'}
        ></Box>
        <Flex
          h={'95%'}
          w={'50%'}
          direction={'column'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text wordBreak={'break-word'}>
            {bookTitle} <br />
            Recomendado el: {recommendationDate}
          </Text>

          <Button
            justifySelf={'flex-end'}
            w={'130px'}
            onClick={changeBookState}
          >
            Comenzar a leer
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

export default ToReadCardSlider;
