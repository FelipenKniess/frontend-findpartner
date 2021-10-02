import React from 'react';
import { Container } from './styles';
import Header from '../../Components/Header';

const Home:React.FC = () => (
  <Container>
    <Header />
    <div className="container">
      <h1>Tela incial</h1>
    </div>
  </Container>
);

export default Home;
