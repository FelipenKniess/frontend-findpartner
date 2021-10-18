import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Header from '../../Components/Header';

const RegisterProducts:React.FC = () => (
  <>
    <Header />
    <Container>
      <div className="container">
        <h1>Cadastrar Produtos</h1>
      </div>
    </Container>
  </>
);

export default RegisterProducts;
