import React, { useEffect, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Header from '../../Components/Header';
import noImageAvatar from '../../assets/images/no-image.gif';
import { useAuth, UserData } from '../../hooks/auth';
import api from '../../services/api';

const Home:React.FC = () => {
  const { user, token } = useAuth();
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    async function execute() {
      const { data } = await api.get('/users/similarInterests', {
        headers: {
          authorization: token,
        },
      });
      console.log(data);
      setUsers(data);
    }

    execute();
  }, [token]);

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <h1>
            Principais
            {user.type === 1 ? ' Fornecedores ' : ' Varejistas '}
          </h1>
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
