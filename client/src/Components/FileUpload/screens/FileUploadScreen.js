import React, { useState } from 'react';
import { multipleFilesUpload, singleFileUpload } from '../data/api';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import './styles.css';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';

const FileUploadScreen = props => {
  const [singleFile, setSingleFile] = useState('');
  const [multipleFiles, setMultipleFiles] = useState('');
  const [matiere, setMatiere] = useState('');
  const [singleProgress, setSingleProgress] = useState(0);
  const [multipleProgress, setMultipleProgress] = useState(0);
  const user = useSelector(state => state.user.user);

  const SingleFileChange = e => {
    setSingleFile(e.target.files[0]);
    setSingleProgress(0);
  };

  // const MultipleFileChange = e => {
  //   setMultipleFiles(e.target.files);
  //   setMultipleProgress(0);
  // };

  const singleFileOptions = {
    onUploadProgress: ProgressEvent => {
      const { loaded, total } = ProgressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setSingleProgress(percentage);
    },
  };

  // const multipleFileOptions = {
  //   onUploadProgress: ProgressEvent => {
  //     const { loaded, total } = ProgressEvent;
  //     const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
  //     setMultipleFiles(percentage);
  //   },
  // };
  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append('matiere', matiere);
    formData.append('teacher', user.name);
    formData.append('file', singleFile);
    await singleFileUpload(formData, singleFileOptions);
    props.getsingle();
  };

  // const uploadMultipleFiles = async () => {
  //   const formData = new FormData();
  //   formData.append('title', title);
  //   for (let i = 0; i < multipleFiles.length; i++) {
  //     formData.append('files', multipleFiles[i]);
  //   }
  //   await multipleFilesUpload(formData, multipleFileOptions);
  //   props.getmultiple();
  // };

  return (
    <>
      <div className='matiere'>
        <input
          className='file-input'
          id='rotated'
          type='checkbox'
          name='rotated'
          defaultChecked
        />
        <label htmlFor='rotated'>Rotate the form</label>
        <form className='radioform'>
          <h3 data-text='Choose Your Language'>Choose Your Subject</h3>
          <label data-text='Math'>
            <input
              className='file-input'
              type='radio'
              name='matiere'
              value='Math'
              onChange={e => setMatiere(e.target.value)}
            />
            Math
            <span className='dot' />
            <span className='dot-shadow' />
          </label>
          <label data-text='Physique'>
            <input
              className='file-input'
              type='radio'
              name='matiere'
              value='Physique'
              onChange={e => setMatiere(e.target.value)}
            />
            Physique
            <span className='dot' />
            <span className='dot-shadow' />
          </label>
          <label data-text='Informatique'>
            <input
              className='file-input'
              type='radio'
              name='matiere'
              value='Informatique'
              onChange={e => setMatiere(e.target.value)}
            />
            Informatique
            <span className='dot' />
            <span className='dot-shadow' />
          </label>
          <label data-text='Sciences'>
            <input
              className='file-input'
              type='radio'
              name='matiere'
              value='Sciences'
              onChange={e => setMatiere(e.target.value)}
            />
            Sciences
            <span className='dot' />
            <span className='dot-shadow' />
          </label>
        </form>
      </div>
      <div className='row mt-3'>
        <div className='col-6'>
          <div className='form-group'>
            <label>Select Single File</label>
            <input
              type='file'
              className='form-control'
              onChange={e => SingleFileChange(e)}
            />
          </div>
          <div className='row'>
            <div className='col-10'>
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => uploadSingleFile()}>
                Upload
              </button>
            </div>
            <div className='col-2'>
              <CircularProgressbar
                value={singleProgress}
                text={`${singleProgress}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(255,136,136, ${singleProgress / 100})`,
                  textColor: '#f88',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })}
              />
            </div>
          </div>
        </div>
        {/* <div className='col-6'>
        <div className='row'>
          <div className='col-6'>
            <label>Title</label>
            <input
              type='text'
              placeholder='enter a title'
              className='form-control'
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className='col-6'>
            <div className='form-group'>
              <label>Multiple File Upload</label>
              <input
                type='file'
                className='form-control'
                multiple
                onChange={e => MultipleFileChange(e)}
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-10'>
            <button
              type='button'
              className='btn btn-danger'
              onClick={() => uploadMultipleFiles()}>
              Upload
            </button>
          </div>
          <div className='col-2'>
            <CircularProgressbar
              value={multipleProgress}
              text={`${multipleProgress}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: 'butt',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255,136,136, ${multipleProgress / 100})`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default FileUploadScreen;
