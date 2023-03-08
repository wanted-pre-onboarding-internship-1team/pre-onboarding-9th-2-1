import getProducts from '../apis/TravelService';
import TravelProduct from './TravelProduct';
import {
  NumberInput,
  NumberInputField,
  Checkbox,
  Stack,
  CheckboxGroup,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const locations = ['서울', '부산'];

const TravelProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    minimumPrice: 0,
    maximumPrice: 999999999,
    category: [],
  });

  const handleCheck = e => {
    const { value, checked } = e.target;
    if (checked) {
      setFilter({
        ...filter,
        category: filter.category.concat(value),
      });
    } else {
      setFilter({
        ...filter,
        category: filter.category.filter(category => value !== category),
      });
    }
  };

  const handleInput = e => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const productReducer = product => {
    const { price, spaceCategory } = product;

    const validPrice =
      filter.minimumPrice <= price && price <= filter.maximumPrice;
    if (!validPrice) {
      return false;
    }

    const validCategory =
      !filter.category.length || filter.category.includes(spaceCategory);
    return validCategory && validPrice;
  };

  useEffect(() => {
    getProducts().then(res => setProducts(res));
  }, []);

  return (
    <>
      <Stack shouldWrapChildren direction='row'>
        <NumberInput size='md' maxW={24} defaultValue={0} min={0}>
          <NumberInputField
            name='minimumPrice'
            onChange={handleInput}
            max={filter.maximumPrice}
          />
        </NumberInput>
        <NumberInput
          size='md'
          maxW={24}
          defaultValue={999999999}
          min={filter.minimumPrice}>
          <NumberInputField name='maximumPrice' onChange={handleInput} />
        </NumberInput>
        <FilterBox locations={locations} handleCheck={handleCheck} />
      </Stack>

      <div>
        {products.filter(productReducer).map(product => {
          return <TravelProduct key={product.idx} data={product} />;
        })}
      </div>
    </>
  );
};

const FilterBox = ({ locations, handleCheck }) => {
  return (
    <CheckboxGroup spacing='1rem' margin='1rem'>
      {locations.map((location, index) => {
        return (
          <Checkbox key={index} value={location} onChange={handleCheck}>
            {location}
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
};

export default TravelProductList;
