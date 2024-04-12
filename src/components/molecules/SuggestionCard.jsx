import Img from '../atoms/Img';
import Text from '../atoms/Text';
import ButtonIO from '../atoms/ButtonSearch';
import useCreateNewBook from '../../hooks/useCreateNewBook';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

const SuggestionCard = ({ selectData, isOpen, onClose }) => {
  const { createNewBook } = useCreateNewBook();
  const saveData = () => {
    createNewBook(selectData);
    onClose();
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectData?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display={'flex'} justifyContent={'center'}>
          <Img
            IMG_URL={`https://covers.openlibrary.org/b/id/${selectData?.cover_i}-L.jpg`}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Volver a la lista</Button>
          <Button onClick={saveData} variant='ghost'>
            Agregar a lista de lectura
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SuggestionCard;
