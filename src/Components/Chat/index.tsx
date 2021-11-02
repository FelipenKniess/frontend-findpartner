import React, {
  useCallback, useRef, useState, useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import io from 'socket.io-client';
import { Container } from './styles';
import Input from '../Input';
import { useAuth } from '../../hooks/auth';

interface DataForm {
    message: string;
}

interface MessagesUsers {
    id: string,
    name: string,
    message: string,
    userId: string
}

const myId = uuidv4();
const socket = io('http://localhost:8080');
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'));

const Chat = () => {
  const formRef = useRef<FormHandles>(null);
  const [messages, setMessages] = useState<MessagesUsers[]>([]);
  const { user } = useAuth();

  useEffect(():any => {
    const handleNewMessage = (newMessage:MessagesUsers) => setMessages([...messages, newMessage]);
    socket.on('chat.message', handleNewMessage);
    return () => socket.off('chat.message', handleNewMessage);
  }, [messages]);

  const handleSubmit = ({ message }: DataForm) => {
    if (message.trim()) {
      socket.emit('chat.message', {
        id: myId,
        message,
        userId: user.id,
      });
      formRef.current?.setFieldValue('message', '');
    }
  };

  return (
    <Container>
      <div className="container">
        <ul>
          {messages.map((message) => (
            <li className={user.id === message.userId ? 'mine' : 'other'} key={message.id}>
              <span>
                {message.name}
                :
                {' '}
              </span>
              <span className="message">{message.message}</span>
            </li>
          ))}
        </ul>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Input name="message" type="text" placeholder="Digite sua mensagem!" />
        </Form>
      </div>
    </Container>
  );
};

export default Chat;
