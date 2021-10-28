console.clear();

const express = require('express');
const connectDB = require('./config/dbConnect');
const path = require('path');
const cors = require('cors');
const fileRoutes = require('./routes/fileUpload');

const app = express(); // express initialisation

require('dotenv').config();

connectDB(); // connecting to the database
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);
// routes
app.use(express.json()); // Body Parser JSON
app.use('/user', require('./routes/user'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api', require('./routes/videoList'));

// server
const PORT = process.env.PORT;
app.listen(PORT, err =>
  err ? console.log(err) : console.log(`server is running on ${PORT}`)
);
