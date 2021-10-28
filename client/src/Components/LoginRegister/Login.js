import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../JS/actions/user';
import loginImg from '../../login.svg';

// export function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const history = useHistory();
//   return (
//     <div className='base-container'>
//       <div className='header'>Login</div>
//       <div className='content'>
//         <div className='image'>
//           <img src={loginImg} alt='' />
//         </div>
//         <div className='form'>
//           <div className='form-group'>
//             <label htmlFor='username'>Username</label>
//             <input
//               type='text'
//               name='username'
//               placeholder='username'
//               onChange={e => setEmail(e.target.value)}
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='password'>Password</label>
//             <input
//               type='password'
//               name='password'
//               placeholder='password'
//               onChange={e => setPassword(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>
//       <div className='footer'>
//         <button
//           type='button'
//           className='btn'
//           onClick={() => dispatch(loginUser({ email, password }, history))}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
//}
