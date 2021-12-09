import React, {
  useState, useRef, useCallback, useEffect,
} from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Container } from './styles';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import noImageAvatar from '../../assets/images/no-image.gif';
import { useAuth, UserData } from '../../hooks/auth';
import Input from '../../Components/Input';
import api from '../../services/api';

interface FiltersUser {
  name?: string,
  interest?: string,
  product?: string
}

const Home:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { token, user } = useAuth();
  const [users, setUsers] = useState<UserData[]>([]);

  const handleSubmit = useCallback(async ({ name, interest, product }: FiltersUser) => {
    const { data } = await api.get(`/users/filter/?name=${name || ''}&interest=${interest || ''}&product=${product || ''}`, {
      headers: {
        authorization: token,
      },
    });
    setUsers(data);
  }, [token]);

  useEffect(() => {
    handleSubmit({});
  }, [handleSubmit]);
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="filters">
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <Input name="name" type="text" placeholder="Nome" />
              <Input name="interest" type="text" placeholder="Interesse" />
              {user.type === 1 && (
                <Input name="product" type="text" placeholder="Produto" />
              )}
              <Button type="submit">
                Filtrar
              </Button>
            </Form>
          </div>
          <div className="users">
            {users.map((resUser) => (
              <Link to={`/user/${resUser.id}`} key={resUser.id} className="user">
                <img src={resUser.avatar ? `http://localhost:3333/${resUser.avatar}` : noImageAvatar} alt={resUser.name} />
                <span className="name-user">{resUser.name}</span>

                <span className="tel-user">
                  <FiPhoneCall />
                  {resUser.telephone ? resUser.telephone : 'Sem número cadastrado'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
