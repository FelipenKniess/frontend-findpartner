import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import Header from '../../Components/Header';
import noImageAvatar from '../../assets/images/no-image.gif';
import { UserData, useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface UsersMatch {
  id: string;
  user: UserData;
}

const InterestedUsers:React.FC = () => {
  const [connections, setConnections] = useState<UsersMatch[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    async function execute() {
      const { data } = await api.get('/connections/interests', {
        headers: {
          authorization: token,
        },
      });
      setConnections(data);
    }
    execute();
  }, [token]);
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          {connections.length > 0 ? (
            <>
              <div>
                <div className="list-connections">
                  <h2>Usuários interessados</h2>
                  <ul>
                    {connections.map(({ id, user }) => (
                      <li key={id}>
                        <Link to={`/user/${user.id}`}>
                          <img src={user.avatar ? `http://localhost:3333/${user.avatar}` : noImageAvatar} alt="profile" />
                          <span>{user.name}</span>
                          <span className="acess-profile">Acessar perfil</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <Chat /> */}
              </div>
            </>
          ) : (
            <h1>Você não tem usuários interessados &#128528;</h1>
          )}
        </div>
      </Container>
    </>
  );
};

export default InterestedUsers;
