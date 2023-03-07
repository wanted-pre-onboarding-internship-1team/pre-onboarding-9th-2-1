import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const portalElement = document.getElementById('overlay');
const Backdrop = ({ onClose }) => {
  return (
    <Box
      position='fixed'
      top='0'
      left='0'
      width='100vw'
      height='100vh'
      background='rgba(0, 0, 0, 0.75)'
      zIndex='999'
      display='flex'
      justifyContent='center'
      alignItem='center'
      onClick={onClose}
    />
  );
};

function ModalOverlay({ children }) {
  return (
    <Box
      background='white'
      position='fixed'
      top='50%'
      left='50%'
      minWidth='30%'
      transform='translate(-50%, -50%)'
      zIndex='1000'
      borderRadius='5px'>
      {children}
    </Box>
  );
}

function Modal({ onClose, children }) {
  useEffect(() => {
    const event = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', event);
    return () => {
      document.removeEventListener('keydown', event);
    };
  }, [onClose]);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
