const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
