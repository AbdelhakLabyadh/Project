import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import loginImg from '../../login.svg';
import { registerUser } from '../../JS/actions/user';
import { useHistory } from 'react-router-dom';

// export function Register() {
//   const [name, setName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const history = useHistory();
//   return (
//     <div className='base-container'>
//       <div className='header'>Register</div>
//       <div className='content'>
//         <div className='image'>
//           <img src={loginImg} alt='' />
//         </div>
//         <div className='form'>
//           <div className='form-group'>
//             <label htmlFor='username'>Name</label>
//             <input
//               type='text'
//               name='Name'
//               placeholder='Name'
//               onChange={e => setName(e.target.value)}
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='username'>Lastname</label>
//             <input
//               type='text'
//               name='Lastname'
//               placeholder='Lastname'
//               onChange={e => setLastName(e.target.value)}
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='email'>Email</label>
//             <input
//               type='text'
//               name='email'
//               placeholder='email'
//               onChange={e => setEmail(e.target.value)}
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='password'>Password</label>
//             <input
//               type='text'
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
//           onClick={() =>
//             dispatch(registerUser({ name, lastName, email, password }, history))
//           }>
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }
