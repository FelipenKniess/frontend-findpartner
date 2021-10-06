import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { Container } from './styles';
import Header from '../../Components/Header';
import noImageAvatar from '../../assets/images/no-image.gif';
import Button from '../../Components/Button';
import imgTeste from '../../assets/images/imgteste.jpg';

const UserProfile:React.FC = () => {
  const x = 2;
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="box">
            <span className="data">23/02/2021</span>
            <h3>Felipe Niehues Kniess</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Est repudiandae rerum exercitationem voluptatibus pariatur
              non aliquam voluptates tempore ab.
              Provident, mollitia fuga! Nemo aut soluta fuga neque, obcaecati a. Eos.
            </p>
            <span className="tel">
              <FiPhoneCall />
              4799790971
            </span>

            <div className="interesses">
              <h4>Interesses:</h4>
              <div className="content">
                <div>
                  <span>Esportes</span>
                </div>
                <div>
                  <span>Esportes</span>
                </div>
                <div>
                  <span>Esportes</span>
                </div>
                <div>
                  <span>Esportes</span>
                </div>
                <div>
                  <span>Esportes</span>
                </div>
                <div>
                  <span>Esportes</span>
                </div>
                <div>
                  <span>Esportes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="image-profile">
            <img src={imgTeste} alt="profile" />
            <Button>
              Estou interessado
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;
