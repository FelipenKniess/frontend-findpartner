import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import {
  FiMail, FiLock, FiUser, FiArrowLeft,
} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';

import {
  Container, Content, Background, AnimationContainer,
} from './styles';
import LogoImg from '../../assets/images/logo.svg';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
    name: string,
    email: string,
    password:string
}

const SignUp:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [typeUser, setTypeUser] = useState<Number | null>(null);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (!typeUser) {
        toast.error('Selecione qual usuário você é!');
        return;
      }

      await api.post('/users/create', { type: typeUser, ...data });

      toast.success('Cadastro realizado!');

      history.push('/');
    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
      toast.error(err.response.data.message);
    }
  }, [typeUser, history]);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={LogoImg} className="logo" alt="Gobarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <div className="user-type">
              <div>
                <input type="radio" onChange={() => setTypeUser(1)} value="varejista" name="type" />
                {' '}
                Sou Varejista
              </div>
              <div>
                <input type="radio" onChange={() => setTypeUser(2)} value="fornecedor" name="type" />
                {' '}
                Sou Fornecedor
              </div>
            </div>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/" className="create-account">
            <FiArrowLeft />
            Voltar para o login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>

  );
};

export default SignUp;
