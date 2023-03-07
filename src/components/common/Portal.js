import reactDom from 'react-dom';

const Potal = ({ children }) => {
  const el = document.getElementById('portalsModal');
  return reactDom.createPortal(children, el);
};

export default Potal;
