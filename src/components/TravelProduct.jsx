import React from 'react';

const TravelProduct = ({ data }) => {
  const { idx, name, mainImage, description, spaceCategory, price } = data;
  return (
    <div>
      <div>{idx}</div>
      <img src={mainImage} alt={description} />
      <div>{name}</div>
      <div>{price}</div>
      <div>{spaceCategory}</div>
      <button>예약</button>
    </div>
  );
};

export default TravelProduct;
