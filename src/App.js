import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import { useAuth } from './providers/AuthProvider';
import { RefetchProvider } from './providers/RefetchProvider';

const App = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="app">
      <ToastContainer
        pauseOnHover
        draggablePercent={20}
        autoClose={2500}
      />
      {isLoggedIn ? <RefetchProvider><Main /></RefetchProvider> : <Login />}
    </div>
  );
};

export default App;
