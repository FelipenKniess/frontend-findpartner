import React, {
  useRef, useCallback, ChangeEvent, useEffect, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
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

interface CompleteRegisterData {
  name: string;
  price: string;
}

const RegisterProducts:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, token } = useAuth();
  const history = useHistory();
  const [imgProduct, setImgProduct] = useState<any>(null);
  const [dataForm, setDataForm] = useState<any>();

  useEffect(() => {
    async function exec() {
      const productData = await productInfo();

      if (productData) {
        setDataForm(productData);
      }
    }

    async function productInfo() {
      const { data } = await api.get('/products', {
        headers: {
          authorization: token,
        },
      });
      return data;
    }

    exec();
  }, [token, user.id]);

  const handleSubmit = useCallback(async ({
    name, price,
  }: CompleteRegisterData) => {
    await api.patch('/products', {
      name,
      price,
    }, {
      headers: {
        authorization: token,
      },
    });

    if (imgProduct) {
      const formData = new FormData();
      formData.append('imgProduct', imgProduct);

      await api.patch('/produts/updateImageProduct', formData, {
        headers: {
          authorization: token,
        },
      });
    }

    toast.success('Produto cadastrado!');
    history.push('/listProduct');
  }, [token, history, imgProduct]);

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
            <label htmlFor="image-product">
              <img src={noImageAvatar} alt="avatar" />
              <input type="file" id="avatar" onChange={handleChangeImageProduct} />
            </label>
            <div className="data">
              <div>
                <div>
                  <span>Nome:</span>
                  <Input name="name" type="text" placeholder="Nome" />
                </div>
                <div>
                  <span>Preço:</span>
                  <Input name="price" type="text" placeholder="Preço" />
                </div>
              </div>
            </div>
            <Button type="submit">Confirmar Mudanças</Button>
          </Form>

        </div>
      </Container>
    </>
  );
};

export default RegisterProducts;
