import axios from 'axios';

export const getProduct = async () => {
  try {
    return await axios.get('/data/mock_data.json');
  } catch (error) {
    throw new Error(error);
  }
};
