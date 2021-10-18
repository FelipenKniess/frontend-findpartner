import React, {
  useCallback, useEffect, useState, useRef,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { CgExtensionRemove, CgExtensionAdd } from 'react-icons/cg';
import { Container } from './styles';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import DefaultInterests from '../../utils/dataInterestsDefault.json';

interface InterestsFormData {
  interest: string;
}

const RegisterInterests:React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data:InterestsFormData) => {
    console.log(data);
  }, []);

  const HandleAddListInterests = useCallback(() => {
    // console.log(data);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <div className="container">

          <div className="storage-interests">
            <h2>Banco de interesses (interesses padrões) </h2>
            <div className="content-interests">
              {DefaultInterests.map((defaultInterest) => (
                <div>
                  {defaultInterest.description}
                  {' '}
                  <span><CgExtensionAdd /></span>
                </div>
              ))}
            </div>
          </div>
          <div className="my-interests">
            <h2>Meus interesses</h2>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="addInterest">
                <Input className="inputInterest" name="interest" />
                <Button type="button" onClick={HandleAddListInterests}>Adicionar</Button>

              </div>
              {/* <span className="title-interests">Interesses:</span> */}

              <div className="content-interests">
                <div>
                  Agricultura 1
                  {' '}
                  <span><CgExtensionRemove /></span>
                </div>
              </div>
              <Button className="buttonSubmit" type="submit">Cadastar</Button>
            </Form>
          </div>
        </div>
      </Container>
    </>

  );
};

export default RegisterInterests;
