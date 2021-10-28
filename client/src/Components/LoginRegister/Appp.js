// import React from 'react';
// import '../../App.css';
// import { Login, Register } from '../LoginRegister/index';

// export default class Appp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogginActive: true,
//     };
//   }

//   componentDidMount() {
//     //Add .right by default
//     this.rightSide.classList.add('right');
//   }

//   changeState() {
//     const { isLogginActive } = this.state;

//     if (isLogginActive) {
//       this.rightSide.classList.remove('right');
//       this.rightSide.classList.add('left');
//     } else {
//       this.rightSide.classList.remove('left');
//       this.rightSide.classList.add('right');
//     }
//     this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
//   }

//   render() {
//     const { isLogginActive } = this.state;
//     const current = isLogginActive ? 'Register' : 'Login';
//     const currentActive = isLogginActive ? 'login' : 'register';
//     return React.createElement(
//       'div',
//       { className: 'Appp' },
//       React.createElement(
//         'div',
//         { className: 'login' },
//         React.createElement(
//           'div',
//           { className: 'container', ref: ref => (this.container = ref) },
//           isLogginActive &&
//             React.createElement(Login, {
//               containerRef: ref => (this.current = ref),
//             }),
//           !isLogginActive &&
//             React.createElement(Register, {
//               containerRef: ref => (this.current = ref),
//             })
//         ),
//         React.createElement(RightSide, {
//           current: current,
//           currentActive: currentActive,
//           containerRef: ref => (this.rightSide = ref),
//           onClick: this.changeState.bind(this),
//         })
//       )
//     );
//   }
// }

// const RightSide = props => {
//   return React.createElement(
//     'div',
//     {
//       className: 'right-side',
//       ref: props.containerRef,
//       onClick: props.onClick,
//     },
//     React.createElement(
//       'div',
//       { className: 'inner-container' },
//       React.createElement('div', { className: 'text' }, props.current)
//     )
//   );
// };
