import axios from 'axios';

export const getProduct = async () => {
  try {
    return await axios.get('/data/product.json');
  } catch (error) {
    throw new Error(error);
  }
};
