import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Header from '../../Components/Header';

const InterestedUsers:React.FC = () => (
  <>
    <Header />
    <Container>
      <div className="container">
        <h1>Usuários interessado</h1>
      </div>
    </Container>
  </>
);

export default InterestedUsers;
