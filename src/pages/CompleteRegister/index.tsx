import React, {
  useRef, useCallback, ChangeEvent, useEffect, memo,
} from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiPhoneCall } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Container } from './styles';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import TextArea from '../../Components/TextArea';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import noImageAvatar from '../../assets/images/no-image.gif';

interface CompleteRegisterData {
  description: string;
  telephone: string;
}

const CompleteRegister:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, updateUser, token } = useAuth();
  const history = useHistory();

  useEffect(() => {
    api.get(`/users/infoUser/${user.id}`, {
      headers: {
        authorization: token,
      },
    }).then((response) => {
      updateUser(response.data);
    });
  }, [token, user.id, updateUser]);

  const handleSubmit = useCallback(async (data: CompleteRegisterData) => {
    const { description, telephone } = data;

    await api.patch('/users/completeRegisterVarejista', {
      description,
      telephone,
    }, {
      headers: {
        authorization: token,
      },
    });

    toast.success('Dados do usuário registrado!');
    history.push('/home');
  }, [token, history]);

  const handleAvatarChange = useCallback(async (element: ChangeEvent<HTMLInputElement>) => {
    if (element.target.files) {
      const formData = new FormData();
      formData.append('avatar', element.target.files[0]);

      await api.patch('/users/updateAvatar', formData, {
        headers: {
          authorization: token,
        },
      }).then((response) => {
        updateUser(response.data);

        toast.success('Imagem do perfil atualizada!');
      });
    }
  }, [updateUser, token]);

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <Form
            initialData={{
              description: user.description,
              telephone: user.telephone,
            }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label htmlFor="avatar">
              <img src={user.avatar ? `http://localhost:3333/${user.avatar}` : noImageAvatar} alt="avatar" />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
            <TextArea name="description" placeholder="Descreva o seu perfil aqui!" />
            <Input icon={FiPhoneCall} name="telephone" type="tel" placeholder="Telefone" />
            <Button className="button-login" type="submit">Confirmar Mudanças</Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default memo(CompleteRegister);
