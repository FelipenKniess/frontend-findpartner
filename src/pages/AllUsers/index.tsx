import React, {
  useEffect, useState, useRef, useCallback,
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

const Home:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { token } = useAuth();
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    async function execute() {
      const oppositeUsers = await api.get('/users/allUsers', {
        headers: {
          authorization: token,
        },
      });
      setUsers(oppositeUsers.data);
    }

    execute();
  }, [token]);

  const handleSubmit = useCallback(() => {

  }, []);
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
              <Input name="product" type="text" placeholder="Produto" />
              <Button>
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
