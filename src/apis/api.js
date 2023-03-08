import axios from 'axios';

export const getProduct = async () => {
  try {
    return await axios.get('/mockUpGetProduct.json');
  } catch (error) {
    throw new Error(error);
  }
};
