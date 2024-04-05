import { ListItem, Button } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react-use-disclosure';
const ListElement = ({ data }) => {
  // const handleSelect = () => {
  //   handlSetectedInput(data);
  // };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ListItem
        onClick={onOpen}
        _hover={{
          background: 'white',
          color: 'teal.500',
        }}
        cursor={'pointer'}
      >
        {' '}
        {data.title}
      </ListItem>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Volver a la lista</Button>
            <Button variant='ghost'>Agregar a lista de lectura</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>{' '}
    </>
  );
};

export default ListElement;
