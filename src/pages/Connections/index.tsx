import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Header from '../../Components/Header';
import Chat from '../../Components/Chat';
import noImageAvatar from '../../assets/images/no-image.gif';

const Connections:React.FC = () => (
  <>
    <Header />
    <Container>
      <div className="container">
        <h1>Conexões</h1>
        <div>
          <div className="list-connections">
            <h2>Minhas Conexões</h2>
            <ul>
              <li>
                <img src={noImageAvatar} alt="NoImage" />
                <span>Felipe Varejista</span>
              </li>
              <li>
                <img src={noImageAvatar} alt="NoImage" />
                <span>Felipe Varejista</span>
              </li>
              <li>
                <img src={noImageAvatar} alt="NoImage" />
                <span>Felipe Varejista</span>
              </li>
              <li>
                <img src={noImageAvatar} alt="NoImage" />
                <span>Felipe Varejista</span>
              </li>
              <li>
                <img src={noImageAvatar} alt="NoImage" />
                <span>Felipe Varejista</span>
              </li>
              <li>
                <img src={noImageAvatar} alt="NoImage" />
                <span>Felipe Varejista</span>
              </li>
              <li>
                <img src={noImageAvatar} alt="NoImage" />
                <span>Felipe Varejista</span>
              </li>
            </ul>
          </div>
          <Chat />
        </div>
      </div>
    </Container>
  </>
);

export default Connections;
