import React, { useState } from 'react';
import './LoginEns.css';
import { userLogin } from '../../JS/UserSlice/UserSlice';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const LoginEns = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin = () => {
    dispatch(userLogin(user));
    setTimeout(() => {
      const role = localStorage.getItem('role');
      console.log(role);
      role === 'enseignant'
        ? history.push('/enspage')
        : history.push('/stpage');
    }, 1000);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className='containerr'>
      <div className='screen'>
        <div className='screen__content'>
          <form className='login' onClick={handleSubmit}>
            <div className='login__field'>
              <ion-icon name='person'></ion-icon>
              <input
                type='text'
                className='login__input'
                placeholder='Email'
                onChange={e => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className='login__field'>
              <ion-icon name='lock-closed'></ion-icon>
              <input
                type='password'
                className='login__input'
                placeholder='Password'
                onChange={e => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button className='button login__submit' onClick={handleLogin}>
              <span className='button__text'>Log In</span>
              <ion-icon name='arrow-forward-circle'></ion-icon>
            </button>
          </form>
          <div className='social-login'>
            <h4>log in via</h4>
            <div className='social-icons'>
              <ion-icon name='logo-google'></ion-icon>
              <ion-icon name='logo-facebook'></ion-icon>
              <ion-icon name='logo-twitter'></ion-icon>
            </div>
          </div>
        </div>
        <div className='screen__background'>
          <span className='screen__background__shape screen__background__shape4' />
          <span className='screen__background__shape screen__background__shape3' />
          <span className='screen__background__shape screen__background__shape2' />
          <span className='screen__background__shape screen__background__shape1' />
        </div>
      </div>
    </div>
  );
};

export default LoginEns;
