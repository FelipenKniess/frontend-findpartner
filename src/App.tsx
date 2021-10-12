import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/auth';

const App:React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
      <GlobalStyle />
      <ToastContainer position="top-center" />
    </AuthProvider>
  </BrowserRouter>
);

export default App;
