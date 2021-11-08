import React, {
  useCallback, useEffect, useState, useRef,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { CgExtensionRemove, CgExtensionAdd } from 'react-icons/cg';
import { toast } from 'react-toastify';
import { Container } from './styles';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import DefaultInterests from '../../utils/dataInterestsDefault.json';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

interface InterestsUserData {
  id: string,
  description: string
}

interface RegisterInterestFormData {
  interest: string
}

const RegisterInterests:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [interestsUser, setInterestsUser] = useState<InterestsUserData[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    async function execute() {
      const { data } = await api.get('/interests', {
        headers: {
          authorization: token,
        },
      });
      setInterestsUser(data);
    }
    execute();
  }, [token]);

  const handleSubmit = useCallback(async ({ interest }:RegisterInterestFormData) => {
    if (!interest.trim()) {
      return;
    }
    try {
      const { data } = await api.post('/interests', {
        interest,
      }, {
        headers: {
          authorization: token,
        },
      });
      setInterestsUser([...interestsUser, data]);
    } catch (err:any) {
      toast.error(err.response.data.message);
    }
  }, [interestsUser, token]);

  const handleRemoveInterest = useCallback(async (id: string) => {
    try {
      await api.delete(`/interests/${id}`, {
        headers: {
          authorization: token,
        },
      });
      const interests = interestsUser.filter((interest) => interest.id !== id);
      setInterestsUser(interests);
    } catch (err:any) {
      toast.error(err.response.data.message);
    }
  }, [token, interestsUser]);
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="content-register">
            <div className="register-interest">
              <h2>Cadastrar interesse</h2>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <div className="addInterest">
                  <Input className="inputInterest" name="interest" />
                  <Button type="submit">Adicionar</Button>
                </div>
              </Form>
            </div>
            <div className="list-interests">
              <h2>Meus interesses</h2>
              <div className="content-interests">
                {interestsUser.map((interest) => (
                  <div
                    key={interest.id}
                    onClick={() => handleRemoveInterest(interest.id)}
                    onKeyDown={() => handleRemoveInterest(interest.id)}
                    role="button"
                    tabIndex={0}
                  >
                    {interest.description}
                    {' '}
                    <span>
                      <CgExtensionRemove />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="storage-interests">
            <h2>Banco de interesses</h2>
            <div className="content-interests">
              {DefaultInterests.map((defaultInterest) => (
                <div
                  key={defaultInterest.description}
                  onClick={() => handleSubmit({ interest: defaultInterest.description })}
                  onKeyDown={() => handleSubmit({ interest: defaultInterest.description })}
                  role="button"
                  tabIndex={0}
                >
                  {defaultInterest.description}
                  {' '}
                  <span><CgExtensionAdd /></span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </>

  );
};

export default RegisterInterests;
