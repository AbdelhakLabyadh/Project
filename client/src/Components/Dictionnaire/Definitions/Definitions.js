import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Definitions.css';

const Definitions = ({ word, meanings, category }) => {
  return (
    <div className='meanings'>
      {/* audio---------------------------- */}
      {meanings[0] && word && category === 'en' && (
        <ReactAudioPlayer
          controls
          autoPlay
          style={{
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '10px',
          }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
        />
        // <audio
        //   controls
        //   style={{
        //     backgroundColor: 'rgb(255, 255, 255)',
        //     borderRadius: '10px',
        //   }}
        //   src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}>
        //   Your browser does not support the audio element.
        // </audio>
      )}
      {/* audio---------------------------- */}

      {word === '' ? (
        <span className='subTitle'>Start by typing a word in Search</span>
      ) : (
        meanings.map(mean =>
          mean.meanings.map(item =>
            item.definitions.map(def => (
              <div
                className='singleMean'
                style={{ backgroundColor: 'white', color: 'black' }}>
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: 'black', width: '100%' }} />
                {def.example && (
                  <span>
                    <b>Example : </b>
                    <span className='words'> {def.example}</span>
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms : </b>
                    <span className='words'>
                      {def.synonyms.map(s => `${s}, `)}
                    </span>
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
