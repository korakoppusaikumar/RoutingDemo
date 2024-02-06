const express = require('express');
const app = express();

const aboutRoutes = require('./about');
app.use('./about', aboutRoutes);

app.listen(3000, () => console.log('Server started on port 3500'));