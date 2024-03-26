import { ListItem } from '@chakra-ui/react';
const ListElement = ({ data, param }) => {
  // const handleSelect = () => {
  //   handlSetectedInput(data);
  // };

  return (
    <ListItem
      _hover={{
        background: 'white',
        color: 'teal.500',
      }}
      cursor={'pointer'}
    >
      {data[param]}
    </ListItem>
  );
};

export default ListElement;
