import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { useSearchContext } from '../../contexts/SearchContextProvider';

const NotesPanel = ({ isOpen, onClose, notes, bookId }) => {
  console.log(notes);
  const [textAreaValue, setTextAreaValue] = useState('');
  const { saveNote } = useSearchContext();
  const handleChangeTextArea = (e) => {
    setTextAreaValue(e.target.value);
  };
  const handleSaveNote = () => {
    saveNote(textAreaValue, bookId);
  };
  return (
    <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset='scale'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Notas sobre este libro</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea onChange={handleChangeTextArea} />
          Mis notas:
          {notes?.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost' onClick={handleSaveNote}>
            Guardar Nota
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NotesPanel;
