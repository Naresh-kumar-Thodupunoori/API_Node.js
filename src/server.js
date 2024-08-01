const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dataRoutes = require('./routes/dataRoutes.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());

app.use('/api', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
