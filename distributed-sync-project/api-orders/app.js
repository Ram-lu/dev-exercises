const express = require('express');
const orderRoutes = require('./src/presentation/routes/OrderRoutes');
const userRoutes = require('./src/presentation/routes/UserRoutes');
const CORS = require('cors');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(CORS());

app.use('/api/order', orderRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
