import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from './JS/UserSlice/UserSlice';

import { Toggle } from './Components/Styles/Toggle';
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
} from './Components/Styles/GlobalStyles';
import { useDarkMode } from './Components/Styles/useDarkMode';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import NavBar from './Components/Navbar/NavBar';
import Dashbord from './Components/Dashbord/Dashbord';
import PrivateRoute from './Components/Router/PrivateRoute';
import HomePage from './Components/HomePage/HomePage';
import ContactUs from './Components/ContactUS/ContactUs';
import RegisterEns from './Components/SignInUpEns/RegisterEns';
import LoginEns from './Components/SignInUpEns/LoginEns';
import Footer from './Components/Footer/Footer';
import Dictionnaire from './Components/Dictionnaire/Dictionnaire';
import EnsPage from './Components/EnsPage/EnsPage';
import CandidatPage from './Components/CandidatPage/CandidatPage';
import FileUpload from './Components/FileUpload/FileUpload';

import './App.css';

const Container = styled.div`
  max-width: 100%;
`;

function App() {
  // const isAuth = localStorage.getItem('token');
  // const role = localStorage.getItem('role');
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, []);
  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <Container>
          <NavBar />
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/enspage' component={EnsPage} />
            <Route path='/stpage' component={CandidatPage} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/register' component={RegisterEns} />
            <Route path='/login' component={LoginEns} />
            <Route path='/footer' component={Footer} />
            <Route path='/dictionary' component={Dictionnaire} />
            <Route path='/fileupload' component={FileUpload} />
            <PrivateRoute to='/dashbord' component={Dashbord} />
          </Switch>
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
