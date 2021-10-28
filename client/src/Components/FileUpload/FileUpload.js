import React, { useEffect, useState } from 'react';
import FileUploadScreen from './screens/FileUploadScreen';
import { getSingleFiles, getMultipleFiles } from './data/api';
import { useSelector } from 'react-redux';

const FileUpload = () => {
  const user = useSelector(state => state.user.user);

  const [singleFiles, setSingleFiles] = useState([]);
  const [multipleFiles, setMultipleFiles] = useState([]);

  const getSingleFilesList = async () => {
    try {
      const filelist = await getSingleFiles();
      setSingleFiles(filelist);
    } catch (error) {
      console.log(error);
    }
  };

  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles();
      setMultipleFiles(fileslist);
      console.log(multipleFiles);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getSingleFilesList();
    getMultipleFilesList();
  }, []);

  return (
    <>
      <div className='container'>
        {/* <h3 className='text-danger font-weight-bolder border-bottom text-center'></h3> */}
        <FileUploadScreen
          getsingle={() => getSingleFilesList()}
          getmultiple={() => getMultipleFilesList()}
        />
      </div>
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-6'>
            <h4 className='text-success font-weight-bold'>Single Files List</h4>
            <div className='row'>
              {singleFiles
                .filter(el => el.teacher === user?.name)
                .map((file, index) => (
                  <div className='col-6'>
                    <div className='card mb-2 border-0 p-0'>
                      <label>{file.createdAt}</label>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* <div className='col-6'>
            <h4 className='text-success font-weight-bold'>
              Multiple Files List
            </h4>
            {multipleFiles.map((element, index) => (
              <div key={element._id}>
                <h6 className='text-danger font-weight-bold'>
                  {element.title}
                </h6>
                <div className='row'>
                  {element.files.map((file, index) => (
                    <div className='col-6'>
                      <div className='card mb-2 border-0 p-0'>
                        <img
                          src={`http://localhost:5000/${file.filePath}`}
                          height='200'
                          className='card-img-top-responsive'
                          alt='img'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FileUpload;
