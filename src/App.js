import Router from './router/router';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/main');
    }
  }, []);
  return <Router />;
}

export default App;
