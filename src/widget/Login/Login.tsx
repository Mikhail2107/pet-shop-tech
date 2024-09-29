import React, { useState } from 'react'; 
import { Helmet } from 'react-helmet';
import Button from '../../share/atom/Button/Button';
import Input from '../../share/atom/Input/Input';
import './Login.css';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Получаем значения логина и пароля
    const loginValue = login;
    const passwordValue = password;

    // Отправляем запрос на сервер или выполняем другую логику аутентификации
    console.log('Login:', loginValue, 'Password:', passwordValue); 
  };

  return (
    <>
      <Helmet>
        <title>Sign in | Goods4you </title>
      </Helmet>
      <div className="login-container">
        <h2 className="login-title">Sign in</h2>
        <form className="login-box" onSubmit={handleSubmit}> {/* Добавляем форму и обработчик onSubmit */}
          <Input 
            areaLabel={'add Login'} 
            inputType={'text'} 
            className={'login-box-name'}
            placeHolder='Login'
            value={login} // Добавляем value и onChange для управления состоянием
            onChange={(e) => setLogin(e.target.value)} 
          />
          <Input 
            areaLabel={'Password'} 
            inputType={'password'} 
            placeHolder='Password'
            className='login-box-password'
            value={password} // Добавляем value и onChange для управления состоянием
            onChange={(e) => setPassword(e.target.value)}
          />                    
          <Button ariaLabel={'Sign'} bgImage={false} className='login-box-button'>
            Sign in
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;

