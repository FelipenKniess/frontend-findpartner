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
              <div>
                <div className="list-connections">
                  <h2>Minhas conexões</h2>
                  <ul>
                    {connections.map(({ id, user }) => (
                      <li key={id}>
                        <a
                          href={`https://api.whatsapp.com/send?phone=${user.telephone}&text=Ol%C3%A1%2C%20bora%20fechar%20uma%20parceria!%20`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={user.avatar ? `http://localhost:3333/${user.avatar}` : noImageAvatar} alt="profile" />
                          <span>{user.name}</span>
                          <span className="acess-profile">Iniciar conversa</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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
