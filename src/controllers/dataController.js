const Data = require('../models/data');
const { fetchAndStoreData } = require('../utils/dataFetcher');

exports.getData = async (req, res) => {
  console.log("asked for the data");
  try {
    fetchAndStoreData();
  } catch(error) {
    console.log("error fetching data and storing", error);
  }
  try {
    const { sort, filter } = req.query;
    let query = Data.find();

    if (filter) {
      const [key, value] = filter.split(':');
      query = query.find({ [key]: value });
    }

    if (sort) {
      const [key, order] = sort.split(':');
      const sortObj = { [key]: order === 'desc' ? -1 : 1 };
      query = query.sort(sortObj);
    }

    const data = await query.exec();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

exports.getDataById = async (req, res) => {
  try {
    const data = await Data.findOne({ id: req.params.id });
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};