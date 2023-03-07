import { useState } from 'react';

const useTriggerRerender = () => {
  const [toggle, setToggle] = useState(false);
  const triggerRerender = () => {
    setToggle(!toggle);
  };
  return triggerRerender;
};

export default useTriggerRerender;
