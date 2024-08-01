const axios = require('axios');
const Data = require('../models/data');

async function fetchAndStoreData() {
  try {
    const response = await axios.get(process.env.DUMMY_DATA_URL);
    const data = response.data;
  
    await Data.deleteMany({});
    const transformedData = data.map(item => ({
      name: item.name,
      language: item.language,
      id: item.id,
      bio: item.bio,
      version: item.version
    }));
  
    await Data.insertMany(transformedData);
    console.log('Data fetched and stored successfully');
    return data;
  } catch (error) {
    console.error('Error fetching and storing data:', error);
    throw error;
  }
}

module.exports = { fetchAndStoreData };