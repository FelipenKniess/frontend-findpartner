import React from 'react';
import { Link } from 'react-router-dom';
import MenuConfig from '../MenuItems';

import { useAuth } from '../../hooks/auth';
import { Container } from './styles';

const Header = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <div className="links">
        <Link to="/">
          Usuários principais
        </Link>
        <Link to="/findUsers">
          Procurar usuários
        </Link>
        <Link to="/connections">
          Minhas conexões
        </Link>
        <Link to="/interestedUsers">
          Usuários interessados
        </Link>
      </div>

      <MenuConfig />
    </Container>
  );
};

export default Header;
