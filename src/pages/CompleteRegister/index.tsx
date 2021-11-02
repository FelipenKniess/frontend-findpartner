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
import Select from '../../Components/Select';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import noImageAvatar from '../../assets/images/no-image.gif';

interface CompleteRegisterData {
  description: string;
  telephone: string;
  city: string;
  uf: string;
  district: string;
  number: string;
  street: string;
}

const CompleteRegister:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, token } = useAuth();
  const history = useHistory();
  const [avatar, setAvatar] = useState<any>(null);
  const [dataForm, setDataForm] = useState<any>();
  const [ufs, setUfs] = useState<[]>([]);
  const [citys, setCitys] = useState<[]>([]);

  useEffect(() => {
    async function exec() {
      const userData = await userInfo();
      const ufsIbge = await getUfs();

      if (ufsIbge) {
        setUfs(ufsIbge);
      }

      if (userData) {
        setDataForm(userData);
        if (userData.address && userData.address[0] && userData.address[0].uf) {
          await api.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${userData.address[0].uf}/municipios`).then((response) => {
            setCitys(response.data);
            if (userData.address[0].city) {
              formRef.current?.setFieldValue('city', userData.address[0].city);
            }
          });
        }
      }
    }

    async function userInfo() {
      const infoUser = await api.get(`/users/infoUser/${user.id}`, {
        headers: {
          authorization: token,
        },
      });
      return infoUser.data;
    }

    async function getUfs() {
      try {
        const ufsIbge = await api.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        return ufsIbge.data;
      } catch (err) {
        console.error(err);
        return [];
      }
    }

    exec();
  }, [token, user.id]);

  const handleChangeUf = useCallback(async () => {
    try {
      await api.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${formRef.current?.getFieldValue('uf')}/municipios`).then((response) => {
        setCitys(response.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleSubmit = useCallback(async (data: CompleteRegisterData) => {
    const {
      description, telephone, city, uf, district, number, street,
    } = data;

    await api.patch('/users/completeRegister', {
      description,
      telephone,
      city,
      uf,
      district,
      number,
      street,
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

  const handleChangeInputOnlyNumber = useCallback((e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setDataForm({ ...dataForm, telephone: e.target.value });
    }
  }, [dataForm]);

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          {dataForm && (
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <label htmlFor="avatar">
                <img src={dataForm.avatar ? `http://localhost:3333/${dataForm.avatar}` : noImageAvatar} alt="avatar" />
                <input type="file" id="avatar" onChange={handleAvatarChange} />
              </label>
              <TextArea defaultValue={dataForm.description ? dataForm.description : undefined} name="description" placeholder="Descreva o seu perfil aqui!" />
              <Input defaultValue={dataForm.telephone ? dataForm.telephone : undefined} onChange={handleChangeInputOnlyNumber} icon={FiPhoneCall} name="telephone" type="text" placeholder="Telefone" />
              <div className="address">
                <div>
                  <div>
                    <span>UF:</span>
                    <Select onChange={handleChangeUf} defaultValue={dataForm.address[0] ? dataForm.address[0].uf : undefined} name="uf" options={ufs.map((uf: any) => uf.sigla)} />
                  </div>
                  <div>
                    <span>Cidade:</span>
                    <Select defaultValue={dataForm.address[0] ? dataForm.address[0].city : undefined} name="city" options={citys.map((city: any) => city.nome)} />
                  </div>
                </div>
                <div>
                  <div>
                    <span>Bairro:</span>
                    <Input defaultValue={dataForm.address[0] ? dataForm.address[0].district : undefined} name="district" type="text" placeholder="Bairro" />
                  </div>
                  <div>
                    <span>Número:</span>
                    <Input defaultValue={dataForm.address[0] ? dataForm.address[0].number : undefined} name="number" type="text" placeholder="Número" />
                  </div>
                  <div>
                    <span>Rua:</span>
                    <Input defaultValue={dataForm.address[0] ? dataForm.address[0].street : undefined} name="street" type="text" placeholder="Rua" />
                  </div>
                </div>
              </div>
              <Button className="button-login" type="submit">Confirmar Mudanças</Button>
            </Form>
          )}
        </div>
      </Container>
    </>
  );
};

export default CompleteRegister;
