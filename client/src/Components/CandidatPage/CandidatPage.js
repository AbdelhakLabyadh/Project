import React, { useEffect, useState } from 'react';
import { getSingleFiles, getMultipleFiles } from '../FileUpload/data/api';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './styles.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CandidatPage = () => {
  const [singleFiles, setSingleFiles] = useState([]);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [choice, setChoice] = useState();

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
      <div>
        <label className='rad-label'>
          <input
            type='radio'
            className='rad-input'
            name='rad'
            value='Sciences'
            onChange={e => setChoice(e.target.value)}
          />
          <div className='rad-design' />
          <div className='rad-text'>Sciences</div>
        </label>
        <label className='rad-label'>
          <input
            type='radio'
            className='rad-input'
            name='rad'
            value='Math'
            onChange={e => setChoice(e.target.value)}
          />
          <div className='rad-design' />
          <div className='rad-text'>Math</div>
        </label>
        <label className='rad-label'>
          <input
            type='radio'
            className='rad-input'
            name='rad'
            value='physique'
            onChange={e => setChoice(e.target.value)}
          />
          <div className='rad-design' />
          <div className='rad-text'>Physique</div>
        </label>
        <label className='rad-label'>
          <input
            type='radio'
            className='rad-input'
            name='rad'
            value='Informatique'
            onChange={e => setChoice(e.target.value)}
          />
          <div className='rad-design' />
          <div className='rad-text'>Informatique</div>
        </label>
      </div>
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-12'>
            <h4 className='text-success font-weight-bold'>Single Files List</h4>
            <TableContainer component={Paper} className='table_data'>
              <Table sx={{ minWidth: 1000 }} aria-label='customized table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Subject</StyledTableCell>
                    <StyledTableCell align='right'>Teacher</StyledTableCell>
                    <StyledTableCell align='right'>File Name</StyledTableCell>
                    <StyledTableCell align='right'>File Size</StyledTableCell>
                    <StyledTableCell align='right'>Date</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {singleFiles
                    .filter(el => el.matiere === choice)
                    .map((file, index) => (
                      <StyledTableRow>
                        <StyledTableCell component='th' scope='row'>
                          {file.matiere}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {file.teacher}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {file.fileName}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {file.fileSize}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {file.createdAt}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
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

export default CandidatPage;
