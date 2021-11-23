import React, {
  useRef, useCallback, ChangeEvent, useEffect, useState,
} from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Container } from './styles';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import noImageAvatar from '../../assets/images/no-image.gif';

/* eslint-disable camelcase */
interface CompleteRegisterData {
  name: string;
  price: number;
  image_product: string;
}

interface ProductInfoParams {
  idProduct: string;
}

const RegisterProducts:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, token } = useAuth();
  const history = useHistory();
  const [imgProduct, setImgProduct] = useState<any>(null);
  const [dataForm, setDataForm] = useState<CompleteRegisterData>();
  const { params } = useRouteMatch<ProductInfoParams>();

  useEffect(() => {
    async function exec() {
      const productData = await productInfo();
      if (productData) {
        setDataForm(productData);
      }
    }

    async function productInfo() {
      const { data } = await api.get(`/products/${params.idProduct}`, {
        headers: {
          authorization: token,
        },
      });
      return data;
    }

    if (params.idProduct) { exec(); }
  }, [token, user.id, params.idProduct]);

  const getProduct = useCallback(async (name:string, price:number) => {
    if (params.idProduct) {
      const { data } = await api.put(`/products/${params.idProduct}`, {
        name,
        price,
      }, {
        headers: {
          authorization: token,
        },
      });

      return data;
    }

    const { data } = await api.post('/products', {
      name,
      price,
    }, {
      headers: {
        authorization: token,
      },
    });

    return data;
  }, [params.idProduct, token]);

  const handleSubmit = useCallback(async ({
    name, price,
  }: CompleteRegisterData) => {
    const productRegister = await getProduct(name, price);

    if (imgProduct) {
      const formData = new FormData();
      formData.append('imgProduct', imgProduct);
      formData.append('productId', productRegister.id);

      await api.patch('/products/updateImageProduct', formData, {
        headers: {
          authorization: token,
        },
      });
    }
    if (params.idProduct) {
      toast.success('Produto Alterado!');
    } else {
      toast.success('Produto cadastrado!');
    }
    history.push('/listProducts');
  }, [token, history, imgProduct, getProduct, params.idProduct]);

  const handleChangeImageProduct = useCallback(async (element: ChangeEvent<HTMLInputElement>) => {
    if (element.target.files && element.target.files.length > 0) {
      setImgProduct(element.target.files[0]);
    }
  }, []);

  const handleClickGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <AiOutlineArrowLeft onClick={handleClickGoBack} size={22} className="goback" />
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <>
              <label htmlFor="image-product">
                <img src={dataForm && dataForm.image_product ? `http://localhost:3333/${dataForm.image_product}` : noImageAvatar} alt="ImageProduct" />
                <input type="file" id="avatar" onChange={handleChangeImageProduct} />
              </label>
              <div className="data">
                <div>
                  <div>
                    <span>Nome:</span>
                    <Input name="name" defaultValue={dataForm && dataForm.name ? dataForm.name : undefined} type="text" placeholder="Nome" />
                  </div>
                  <div>
                    <span>Preço:</span>
                    <Input name="price" defaultValue={dataForm && dataForm.price ? dataForm.price : undefined} type="text" placeholder="Preço" />
                  </div>
                </div>
              </div>
              <Button type="submit">Confirmar Mudanças</Button>
            </>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default RegisterProducts;
