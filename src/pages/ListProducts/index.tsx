import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useHistory } from 'react-router-dom';
import Table from '../../Components/Table';
import Header from '../../Components/Header';
import noImageAvatar from '../../assets/images/no-image.gif';
import Button from '../../Components/Button';
import { Container } from './styles';

const ListProducts = () => {
  const history = useHistory();

  const handleCLickRegisterProduct = () => {
    history.push('/registerProduct');
  };

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <h1>Listagem de produtos</h1>
          <Button onClick={handleCLickRegisterProduct}>
            Cadastrar produto
          </Button>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>Imagem</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell component="th" scope="row">
                  Roupeiro
                </TableCell>
                <TableCell component="th" scope="row">
                  31.35
                </TableCell>
                <TableCell component="th" scope="row">
                  <img src={noImageAvatar} alt="noImage" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell component="th" scope="row">
                  Roupeiro
                </TableCell>
                <TableCell component="th" scope="row">
                  31.35
                </TableCell>
                <TableCell component="th" scope="row">
                  <img src={noImageAvatar} alt="noImage" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default ListProducts;
