import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

interface SignInCredentials {
    email: String;
    password: String;
}

interface AuthState {
    token: string;
    user: UserData;
}

interface AuthContextData {
    user: UserData;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    updateUser(user: UserData): void;
    token:string
}

interface UserData {
  id: String,
  email: string,
  name: string,
  type: number,
  avatar: string,
  telephone: string,
  description: string,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider:React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@FindPartner:token');
    const user = localStorage.getItem('@FindPartner:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email, password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@FindPartner:token', token);
    localStorage.setItem('@FindPartner:user', JSON.stringify(user));

    setData({ token, user });
    toast.success(`Seja bem vindo ${user.name} `);
  }, []);

  const updateUser = useCallback((user: UserData) => {
    setData({
      token: data.token,
      user,
    });

    localStorage.setItem('@FindPartner:user', JSON.stringify(data.user));
  }, [data.token, data.user]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@FindPartner:token');
    localStorage.removeItem('@FindPartner:user');

    toast.info('Você foi deslogado, faça login novamente!');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{
      user: data.user, signIn, signOut, updateUser, token: `Baerer ${data.token}`,
    }}
    >
      { children }
    </AuthContext.Provider>
  );
};

function useAuth():AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
