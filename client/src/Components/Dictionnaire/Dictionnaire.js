import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Header from './DictComponents/Header';
import Definitions from './Definitions/Definitions';

const Dictionnaire = () => {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');

  const dictionaryAPI = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryAPI();
  }, [word, category]);

  return (
    <div
      className='DictApp'
      style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}>
      <Container
        maxWidth='md'
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
};

export default Dictionnaire;
