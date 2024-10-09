import { useState } from 'react';
import { useLoginUserMutation } from '../../entities/user/userAuthApi'; 
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Input from '../../share/atom/Input/Input';
import Button from '../../share/atom/Button/Button';
import Spiner from '../../share/spiner/spiner';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false); 
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      loginUser({ username, password })
        .unwrap()
        .then((data) => {
          localStorage.setItem('user', JSON.stringify(data));
          
          navigate('/');
        })
        .catch((err) => {
          console.error('Ошибка при входе:', err);
        });
    } catch (err) {
      console.error('Ошибка при входе:', err);
    }
  };
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setIsUsernameInvalid(e.target.value.trim() === '');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsPasswordInvalid(e.target.value.trim() === '');
  };
 
  if (isLoading) {
    return <Spiner />; 
  }
  
  return (
    <>
      <Helmet>
        <title>Sign in | Goods4you </title>
      </Helmet>
      <div className="login-container">
        <h2 className="login-title">Sign in</h2>
        
        <form className="login-box" onSubmit={handleSubmit}> 
          <Input 
            areaLabel={'add Login'}
            inputType={'text'}
            className={`login-box-name `}
            placeHolder='Login'
            value={username}
            onChange={handleUsernameChange}
            classNameInput={isUsernameInvalid ? 'input-failed' : ''} />
          <Input 
            areaLabel={'Password'}
            inputType={'password'}
            placeHolder='Password'
            className={'login-box-password'}
            value={password}
            onChange={handlePasswordChange}  
            classNameInput={isPasswordInvalid ? 'input-failed' : ''}  />             
          <Button typeButton="submit" ariaLabel={'Sign'} bgImage={false} className='login-box-button'>
            Sign in
          </Button>      
          {error && <div className="error" >Ошибка</div>}
        </form>
      </div>
    </>
  );
};

export default Login;