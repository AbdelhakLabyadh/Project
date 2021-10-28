'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoFileSchema = new Schema(
  {
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('VideoFile', videoFileSchema);
