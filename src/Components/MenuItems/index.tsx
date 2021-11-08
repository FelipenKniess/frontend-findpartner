import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { signOut, user } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Configurações
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <Link to="/editProfile">
            Editar Perfil
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/registerInterests">
            Meus interesses
          </Link>
        </MenuItem>
        {user.type === 2 && (
          <MenuItem>
            <Link to="/listProducts">
              Meus produtos
            </Link>
          </MenuItem>
        )}
        <MenuItem onClick={signOut}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
