import { useState } from 'react';
import { Flex, Text, Box, Tooltip } from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';
import NotesPanel from '../molecules/NotesPanel';
import { useDisclosure } from '@chakra-ui/react';
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

const ReadCardSlider = ({ books }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const slideStylesWidthBackground = books[currentIndex]?.imgUrl;
  const bookTitle = books[currentIndex]?.title;
  const recommendationDate = books[currentIndex]?.recommendationDate;
  const startDate = books[currentIndex]?.startDate;
  const finishDate = books[currentIndex]?.finishDate;
  return (
    <Flex h={'95%'} w={'100%'} direction={'column'}>
      <Flex h={'100%'} w={'100%'} justifyContent={'space-evenly'}>
        <Arrow direction='left' onClick={goToPrevious} />
        <Box
          width={'130px'}
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
        <Flex h={'95%'} direction={'column'} justifyContent={'space-evenly'}>
          <Text>{bookTitle}</Text>
          <Text wordBreak={'break-word'}>
            recomendado el: {recommendationDate}
          </Text>
          <Text wordBreak={'break-word'}>Iniciado el: {startDate}</Text>
          <Text wordBreak={'break-word'}>Terminado el: {finishDate}</Text>
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

export default ReadCardSlider;
