import React, { useCallback, useEffect, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { toast } from 'react-toastify';
import { Container } from './styles';
import Header from '../../Components/Header';
import noImageAvatar from '../../assets/images/no-image.gif';
import Button from '../../Components/Button';
import api from '../../services/api';
import { useAuth, UserData } from '../../hooks/auth';
import pinLocalizacao from '../../assets/images/pin-localizacao.png';

interface UserInfoParams {
  id: string;
}

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 500,
  borderRadius: '20px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  color: '#000',
  background: '#FFF',
  p: 2,
  px: 4,
  pb: 3,
};

const UserProfile:React.FC = () => {
  const { token } = useAuth();
  const [user, setUser] = useState<UserData>();
  const { params } = useRouteMatch<UserInfoParams>();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const handleOpenCartMatch = () => setOpen(true);
  const handleCloseCartMatch = () => setOpen(false);

  useEffect(() => {
    async function execute() {
      const dataUser = await api.get(`/users/infoUser/${params.id}`, {
        headers: {
          authorization: token,
        },
      });
      setUser(dataUser.data);
    }

    execute();
  }, [token, params.id]);

  const connectUsers = useCallback(async () => {
    const response = await api.post('connections', {
      user_interested_id: user?.id,
    }, {
      headers: {
        authorization: token,
      },
    });

    return response;
  }, [token, user?.id]);

  const handleConnectUsers = useCallback(async () => {
    try {
      const { data } = await connectUsers();

      if (data.match) {
        handleOpenCartMatch();
      } else {
        toast.success('Que legal, você demonstrou interesse no usuário!');
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  }, [connectUsers]);

  const handleClickGoToChat = useCallback(() => {
    history.push('/chat');
  }, [history]);

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          {user && (
          <>
            <div className="box">
              <span className="data">{user.createdAt}</span>
              <h3>{user.name}</h3>
              <p>{user.description ? user.description : 'Usuário sem descrição...'}</p>
              <span className="tel">
                {user.telephone && (
                  <span>
                    <FiPhoneCall />
                    {user.telephone}
                  </span>
                )}
              </span>
              {user.email && (
                <div className="email">
                  <AiOutlineMail size={18} />
                  <span>{user.email}</span>
                </div>
              )}
              {user.address[0] && (
                <div className="address">
                  <img src={pinLocalizacao} alt="Pin localizacao" />
                  <span>{`${user.address[0].street}, ${user.address[0].district} - ${user.address[0].city} - ${user.address[0].uf}`}</span>
                </div>
              )}
              {user.interest.length > 0 && (
                <div className="interesses">
                  <h4>Interesses:</h4>
                  <div className="content">
                    {user.interest.map((interest) => (
                      <div>
                        <span>{interest.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="image-profile">
              <img src={user.avatar ? `http://localhost:3333/${user.avatar}` : noImageAvatar} alt="profile" />
              <Button onClick={handleConnectUsers}>
                Estou interessado
              </Button>
            </div>
          </>
          )}
        </div>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          className="modalConnect"
          onClose={handleCloseCartMatch}
          BackdropComponent={Backdrop}
        >
          <Box sx={style}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2 style={{ color: '#0F7A64', marginBottom: '10px' }} id="unstyled-modal-title">
                Vocês dois estão interessados!
              </h2>
              <p style={{ marginBottom: '10px', textAlign: 'center' }} id="unstyled-modal-description">
                {user?.name}
                {' '}
                também está interessado, comece já a conversar!
              </p>
              <Button onClick={handleClickGoToChat} style={{ width: 'initial' }}>
                Ir para o chat
              </Button>
            </div>
          </Box>
        </StyledModal>
      </Container>
    </>
  );
};

export default UserProfile;
