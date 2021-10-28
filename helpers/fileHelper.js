'use strict';
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
    );
  },
});

const filefilter = (req, file, cb) => {
  if (
    file.mimetype === 'application/pdf' ||
    file.mimetype === 'application/pdf' ||
    file.mimetype === 'application/pdf'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// const videofilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'video/x-msvideo' ||
//     file.mimetype === 'video/mpeg' ||
//     file.mimetype === 'video/mp4' ||
//     file.mimetype === 'video/3gpp'
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

const upload = multer({
  storage: storage,
  fileFilter: filefilter,
});

module.exports = { upload };
