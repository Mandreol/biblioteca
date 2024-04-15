import React from 'react';
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
const NotesPanel = ({ isOpen, onClose }) => {
  return (
    <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset='scale'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Notas sobre este libro</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Guardar Nota</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NotesPanel;
