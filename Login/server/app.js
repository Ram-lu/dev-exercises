require('dotenv').config({ path: './config/.env' });

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const cors = require('cors');

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
