const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { fetchAndStoreData } = require('./src/utils/dataFetcher');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  return fetchAndStoreData();
})
.then(() => {
  console.log('Database initialized successfully');
  process.exit(0);
})
.catch((err) => {
  console.error('Error initializing database:', err);
  process.exit(1);
});