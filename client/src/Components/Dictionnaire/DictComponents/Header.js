import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import categories from '../data/category';
import './Header.css';

const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  const handleChange = language => {
    setCategory(language);
    setWord('');
  };

  return (
    <div className='header'>
      <span className='title'>{word ? word : 'Dictionnary'}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className='search'
            label='Search a Word'
            value={word}
            onChange={e => setWord(e.target.value)}
          />
          <TextField
            select
            className='select'
            label='Language'
            value={category}
            onChange={e => handleChange(e.target.value)}>
            {categories.map(option => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
