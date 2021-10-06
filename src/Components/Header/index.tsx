import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CgLogOut } from 'react-icons/cg';
import { GrConfigure } from 'react-icons/gr';
import MenuConfig from '../MenuItems';

import { useAuth } from '../../hooks/auth';
import { Container } from './styles';

const Header = () => {
  const { signOut } = useAuth();

  const handleClickSignOut = () => {
    signOut();
    toast.info('Você foi desconectado!');
  };

  return (
    <Container>
      <div className="links">
        <Link to="/">
          Usuários principais
        </Link>
        <Link to="/projects">
          Procurar usuários
        </Link>
        <Link to="/projects">
          Minhas conexões
        </Link>
        <Link to="/projects">
          Usuários interessados
        </Link>

      </div>

      <MenuConfig />
    </Container>
  );
};

export default Header;
