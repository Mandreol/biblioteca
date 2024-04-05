import { Button } from '@chakra-ui/react';
const ButtonSearch = ({ buttontext, handleButtonClick }) => {
  const toggleState = () => {
    handleButtonClick((prev) => !prev);
  };

  return (
    <Button onClick={toggleState} size='sm' variant={'outline'}>
      {buttontext}
    </Button>
  );
};

export default ButtonSearch;
