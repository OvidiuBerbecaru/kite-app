import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import { useAuth } from './auth/AuthProvider';

const App = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="app">
      <ToastContainer
        pauseOnHover
        draggablePercent={20}
        bodyClassName="default-toast-body"
        progressClassName="default-toast-progress"
        autoClose={5000}
      />
      {isLoggedIn ? <Main /> : <Login />}
    </div>
  );
};

export default App;
