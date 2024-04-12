import { ListItem } from '@chakra-ui/react';

const ListElement = ({ data, accion }) => {
  const handleSelect = () => {
    accion(data);
  };

  return (
    <ListItem
      onClick={handleSelect}
      _hover={{
        background: 'white',
        color: 'teal.500',
      }}
      cursor={'pointer'}
    >
      {data.title}
    </ListItem>
  );
};

export default ListElement;
