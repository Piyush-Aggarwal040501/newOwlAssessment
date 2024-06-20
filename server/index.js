const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(require('./router/addStudent'));
app.use(require('./router/allStudents'));
app.use(require('./router/editStudent'));
app.use(require('./router/deleteStudent'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
