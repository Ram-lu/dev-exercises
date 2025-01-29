require('dotenv').config({ path: './.env' });

const express = require('express');
const userRoutes = require('./src/presentation/routes/UserRoutes');
const CORS = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(CORS());

app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
