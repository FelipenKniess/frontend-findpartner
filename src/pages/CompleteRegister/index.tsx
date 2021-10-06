import React, {
  useRef, useCallback, ChangeEvent, useEffect, useState,
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
import { useAuth, UserData } from '../../hooks/auth';
import noImageAvatar from '../../assets/images/no-image.gif';

interface CompleteRegisterData {
  description: string;
  telephone: string;
}

const CompleteRegister:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, token } = useAuth();
  const history = useHistory();
  const [avatar, setAvatar] = useState<any>(null);
  const [dataForm, setDataForm] = useState<UserData>();

  useEffect(() => {
    api.get(`/users/infoUser/${user.id}`, {
      headers: {
        authorization: token,
      },
    }).then((response) => {
      setDataForm(response.data);
    });
  }, [token, user.id]);

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

    if (avatar) {
      const formData = new FormData();
      formData.append('avatar', avatar);

      await api.patch('/users/updateAvatar', formData, {
        headers: {
          authorization: token,
        },
      });
    }

    toast.success('Dados do usuário registrado!');
    history.push('/home');
  }, [token, history, avatar]);

  const handleAvatarChange = useCallback(async (element: ChangeEvent<HTMLInputElement>) => {
    if (element.target.files && element.target.files.length > 0) {
      setAvatar(element.target.files[0]);
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          {dataForm && (
            <Form
              initialData={{
                description: dataForm.description,
                telephone: dataForm.telephone,
              }}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <label htmlFor="avatar">
                <img src={dataForm.avatar ? `http://localhost:3333/${dataForm.avatar}` : noImageAvatar} alt="avatar" />
                <input type="file" id="avatar" onChange={handleAvatarChange} />
              </label>
              <TextArea name="description" placeholder="Descreva o seu perfil aqui!" />
              <Input icon={FiPhoneCall} name="telephone" type="tel" placeholder="Telefone" />
              <Button className="button-login" type="submit">Confirmar Mudanças</Button>
            </Form>
          )}
        </div>
      </Container>
    </>
  );
};

export default CompleteRegister;
