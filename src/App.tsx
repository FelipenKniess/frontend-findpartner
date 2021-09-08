import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App:React.FC = () => (
  <BrowserRouter>
    <Routes />
    <GlobalStyle />
    <ToastContainer />
  </BrowserRouter>
);

export default App;
