import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import MenuConfig from '../MenuItems';

import { useAuth } from '../../hooks/auth';
import { Container } from './styles';
import UserProfile from '../../pages/UserProfile';

const Header = () => {
  const { path } = useRouteMatch();

  return (
    <Container>
      <div className="links">
        <Link className={path === '/home' ? 'current' : ''} to="/">
          Usuários principais
        </Link>
        <Link className={path === '/findUsers' ? 'current' : ''} to="/findUsers">
          Procurar usuários
        </Link>
        <Link className={path === '/connections' ? 'current' : ''} to="/connections">
          Minhas conexões
        </Link>
        <Link className={path === '/interestedUsers' ? 'current' : ''} to="/interestedUsers">
          Usuários interessados
        </Link>
      </div>

      <MenuConfig />
    </Container>
  );
};

export default Header;
