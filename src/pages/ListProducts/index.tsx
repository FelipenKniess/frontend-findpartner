import React, { useEffect, useState, useCallback } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Table from '../../Components/Table';
import Header from '../../Components/Header';
import noImageAvatar from '../../assets/images/no-image.gif';
import Button from '../../Components/Button';
import { Container } from './styles';
import FormatValue from '../../utils/formatValue';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

/* eslint-disable camelcase */
interface ProductData {
  id: string,
  name: string,
  price: number,
  image_product:string
}

const ListProducts = () => {
  const history = useHistory();
  const [products, setProducts] = useState<ProductData[]>([]);
  const { token } = useAuth();

  const handleCLickRegisterProduct = () => {
    history.push('/registerProduct');
  };

  const handleClickEditProduct = useCallback((idProduct:string) => {
    history.push(`/registerProduct/${idProduct}`);
  }, [history]);

  const handleClickDeleteProduct = useCallback(async (idProduct:string) => {
    try {
      await api.delete(`/products/${idProduct}`, {
        headers: {
          authorization: token,
        },
      });

      const newProducts = products.filter((product) => product.id !== idProduct);
      setProducts(newProducts);
      toast.success('Produto Excluido com sucesso');
    } catch (err) {
      toast.error('Não foi possível excluir o produto!');
    }
  }, [token, products]);

  useEffect(() => {
    const exec = async () => {
      const { data } = await api.get('/products', {
        headers: {
          authorization: token,
        },
      });

      setProducts(data);
    };
    exec();
  }, [token]);

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
                <TableCell>Nome</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>Imagem</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {FormatValue(product.price)}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <img src={product.image_product ? `http://localhost:3333/${product.image_product}` : noImageAvatar} alt="imageProduct" />
                  </TableCell>
                  <TableCell className="actions" component="th" scope="row">
                    <AiFillEdit size={25} onClick={() => handleClickEditProduct(product.id)} />
                    <AiFillDelete size={25} onClick={() => handleClickDeleteProduct(product.id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default ListProducts;
