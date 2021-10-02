import React, { useRef, useCallback, SyntheticEvent } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiPhoneCall } from 'react-icons/fi';
import { Container } from './styles';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import TextArea from '../../Components/TextArea';

interface CompleteRegisterData {
  description: String;
  telephone: String;
}
const CompleteRegister = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: CompleteRegisterData) => {
    console.log(data);
  }, []);

  const telIsNumber = useCallback((event: any) => {
    console.log(event.target.value);
  }, []);

  return (
    <Container>
      <Header />
      <div className="container">
        <h1>Cadastrar perfil</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <TextArea name="description" placeholder="Descreva o seu perfil aqui!" />
          <Input icon={FiPhoneCall} onChange={(campo) => telIsNumber(campo)} name="telephone" type="tel" placeholder="Telefone" />
          <Button className="button-login" type="submit">Cadastrar</Button>
        </Form>
      </div>
    </Container>
  );
};

export default CompleteRegister;
