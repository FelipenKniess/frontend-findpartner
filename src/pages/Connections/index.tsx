import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Header from '../../Components/Header';
import Chat from '../../Components/Chat';
import noImageAvatar from '../../assets/images/no-image.gif';
import { UserData, useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface UsersMatch {
  id: string;
  user: UserData;
}

const Connections:React.FC = () => {
  const [connections, setConnections] = useState<UsersMatch[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    async function execute() {
      const { data } = await api.get('/connections/matchs', {
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
              <h1>Conexões</h1>
              <div>
                <div className="list-connections">
                  <h2>Minhas Conexões</h2>
                  <ul>
                    {connections.map(({ id, user }) => (
                      <li key={id}>
                        <img src={user.avatar ? user.avatar : noImageAvatar} alt="ImgUser" />
                        <span>{user.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Chat />
              </div>
            </>
          ) : (
            <h1>Você não tem conexões &#128528;</h1>
          )}
        </div>
      </Container>
    </>
  );
};

export default Connections;
