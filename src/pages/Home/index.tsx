import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Header from '../../Components/Header';
import noImageAvatar from '../../assets/images/no-image.gif';

const Home:React.FC = () => {
  const x = 2;
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="users">
            <Link to="/user/f722a01c-c690-405a-bc5b-181d98affa4e" className="user">
              <img src={noImageAvatar} alt="" />
              <span className="name-user">Felipe Kniess</span>
              <span className="tel-user">
                <FiPhoneCall />
                47997909471
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
