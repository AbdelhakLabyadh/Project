import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

const EnsPage = () => {
  const user = useSelector(state => state.user.user);

  return (
    <div className='page'>
      <section className='one'>
        <h3>Hello Mr(Mrs). {user?.name}</h3>
        <p>
          Hope you are that kind of teachers who brought Pizza to his
          students...
        </p>
      </section>
      <section className='two'>
        <div className='ENScontainer'>
          <div className='serviceBox'>
            <div className='icon' style={{ backgroundColor: '#ffb508' }}>
              <ion-icon name='chatbubbles-outline'></ion-icon>
            </div>
            <div className='content'>
              <h2>Forum</h2>
              <p>
                answering questions.
                <br /> teaching something.
                <br /> sharing knowledge.
              </p>
            </div>
          </div>
          <div className='serviceBox'>
            <div className='icon' style={{ backgroundColor: '#37ba82' }}>
              <ion-icon name='videocam-outline' />
            </div>
            <div className='content'>
              <h2>Video</h2>
              <p>
                answering questions.
                <br /> teaching something.
                <br /> sharing knowledge.
              </p>
            </div>
          </div>
          <div className='serviceBox'>
            <div className='icon' style={{ backgroundColor: '#cd57ff' }}>
              <Link to='/fileupload'>
                <ion-icon name='document-outline' />
              </Link>
            </div>
            <div className='content'>
              <h2>Upload</h2>
              <p>
                correction of an exam.
                <br /> correction of a series of exercises.
                <br /> sharing important files.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnsPage;
