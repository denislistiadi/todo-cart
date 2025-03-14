import React from 'react';
import { useNavigate } from 'react-router';
import { loginApi } from '../../services/loginApi.service';
import useAuth, { IAuthStore } from '../../store/auth.store';
import Button from '../Button';
import FieldInput from '../FieldInput';
import './style.css';

export default function Index() {
  const navigate = useNavigate();
  const onAuthChange = useAuth((state: IAuthStore) => state.onAuthChange);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);
      event.preventDefault();
      const payload = { username, password };
      const response = await loginApi(payload);
      localStorage.setItem('auth', JSON.stringify(response));
      onAuthChange(response);
      navigate('/');
    } catch (error: any) {
      console.error(error);
      alert(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <div className="login-wrapper">
        <h1>Welcome Back!</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <FieldInput
            label="Username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <FieldInput
            label="Password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button loading={loading} buttonClass="login-button" type="submit">
            Login
          </Button>
        </form>
      </div>
    </main>
  );
}
