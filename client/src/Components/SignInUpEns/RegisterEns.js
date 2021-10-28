import e from 'cors';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { userRegister } from '../../JS/UserSlice/UserSlice';
import './RegisterEns.css';

const RegisterEns = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    lastName: '',
    role: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = e => {
    if (user.role === 'enseignant') {
      dispatch(userRegister(user));

      setTimeout(function () {
        history.push('/enspage');
      }, 500);
    } else {
      dispatch(userRegister(user));
      setTimeout(function () {
        history.push('/stpage');
      }, 500);
    }
    e.preventDefault();
  };

  return (
    <>
      <meta charSet='UTF-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <div className='grid align__item'>
        <div className='register'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='site__logo'
            width={56}
            height={84}
            viewBox='77.7 214.9 274.7 412'>
            <defs>
              <linearGradient id='a' x1='0%' y1='0%' y2='0%'>
                <stop offset='0%' stopColor='#8ceabb' />
                <stop offset='100%' stopColor='#378f7b' />
              </linearGradient>
            </defs>
            <path
              fill='url(#a)'
              d='M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z'
            />
          </svg>
          <h2>Sign Up</h2>
          <form className='form'>
            <div className='form__field'>
              <input
                type='name'
                placeholder='Name'
                onChange={e => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className='form__field'>
              <input
                type='name'
                placeholder='Last Name'
                onChange={e => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
            <div className='form__field'>
              <input
                type='email'
                placeholder='info@mailaddress.com'
                onChange={e => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className='form__field'>
              <input
                type='password'
                placeholder='••••••••••••'
                onChange={e => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className='role'>
              {/* <div className='roleElmnt'>
                <input
                  defaultChecked
                  type='radio'
                  value='enseignant'
                  name='role'
                  onChange={e => {
                    setUser({ ...user, role: e.target.value });
                  }}
                />
                <label> Candidat </label>
              </div>
              <div className='roleElmnt'>
                <input
                  type='radio'
                  value='candidat'
                  name='role'
                  onChange={e => {
                    setUser({ ...user, role: e.target.value });
                  }}
                />
                <label>Enseignant</label>
              </div> */}
              <div className='wrapper'>
                <input
                  type='radio'
                  value='candidat'
                  name='role'
                  id='option-1'
                  defaultChecked
                  onChange={e => {
                    setUser({ ...user, role: e.target.value });
                  }}
                />
                <input
                  type='radio'
                  value='enseignant'
                  name='role'
                  id='option-2'
                  onChange={e => {
                    setUser({ ...user, role: e.target.value });
                  }}
                />
                <label htmlFor='option-1' className='option option-1'>
                  <div className='dot' />
                  <span>Student</span>
                </label>
                <label htmlFor='option-2' className='option option-2'>
                  <div className='dot' />
                  <span>Teacher</span>
                </label>
              </div>
            </div>

            <div className='form__field'>
              <button
                className='registerBtn'
                defaultValue='Sign Up'
                onClick={handleRegister}>
                Register
              </button>
            </div>
          </form>
          <p>
            Already have an accout? <Link to='/login'>Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterEns;
