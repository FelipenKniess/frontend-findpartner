import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Header from '../../Components/Header';

const Connections:React.FC = () => (
  <>
    <Header />
    <Container>
      <div className="container">
        <h1>Conexões</h1>
      </div>
    </Container>
  </>
);

export default Connections;
