const express = require('express');
// const connectDB = require('./db');
const fakeAuth = require('./routes/fakeAuth');


require('dotenv').config();

// connectDB();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


app.use(express.json());

app.use('/api', fakeAuth);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
