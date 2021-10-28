'use strict';

const MultipleFile = require('../models/multipleFile');
const SingleFile = require('../models/singleFile');

const singleFileUpload = async (req, res, next) => {
  try {
    const file = new SingleFile({
      matiere: req.body.matiere,
      teacher: req.body.teacher,
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
    });
    await file.save();
    res.status(201).send('file uploaded successfully...');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// const videoFileUpload = async (req, res, next) => {
//   try {
//     const file = new VideoFile({
//       fileType: req.file.mimetype,
//       fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
//     });
//     await file.save();
//     res.status(201).send('Video uploaded successfully...');
//   } catch (error) {
//     res.status(400).send(`fuck this shit man ${error.message}`);
//   }
// };

const multipleFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach(element => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      filesArray.push(file);
    });
    const multipleFiles = new MultipleFile({
      matiere: req.body.matiere,
      files: filesArray,
    });
    await multipleFiles.save();
    res.status(201).send('filess uploaded successfully...');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllSingleFiles = async (req, res, next) => {
  try {
    const files = await SingleFile.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllMultipleFiles = async (req, res, next) => {
  try {
    const files = await MultipleFile.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index]
  );
};

module.exports = {
  singleFileUpload,
  multipleFileUpload,
  getAllSingleFiles,
  getAllMultipleFiles,
};
