import React from 'react';
import Img from '../atoms/Img';
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
import useSaveNewBook from '../../hooks/backEndApiFucntions/useSaveNewBook';

const SuggestionCard = ({ selectData, isOpen, onClose }) => {
  const createNewBook = useCreateNewBook();
  const newBook = createNewBook(selectData);
  const { saveBook, error, loading } = useSaveNewBook();

  const saveData = () => {
    console.log(newBook);
    saveBook(newBook);
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
          <Button onClick={saveData} variant='ghost' isLoading={loading}>
            Agregar a lista de lectura
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SuggestionCard;
