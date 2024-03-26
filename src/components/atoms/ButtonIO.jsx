import { Button } from '@chakra-ui/react';
const ButtonIO = ({ buttontext, handleButtonClick }) => {
  const toggleState = () => {
    handleButtonClick((prev) => !prev);
  };

  return (
    <Button onClick={toggleState} size='sm' w={'130px'} variant={'outline'}>
      {buttontext}
    </Button>
  );
};

export default ButtonIO;
