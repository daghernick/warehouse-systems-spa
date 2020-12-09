import React, { Component } from 'react'; 
import './merch.css';

interface storeItem {
  name: string;
  price: number;
  imgPath: string;
}
const Merch: React.FC = () => {
  const stock: storeItem[] = [
    {
      name: "Fall 2020 T-shirt (bird)",
      price: 35,
      imgPath: "bird-tshirt.png"
    },
    {
      name: "Fall 2020 T-shirt (skull)",
      price: 35,
      imgPath: "skull-tshirt.png"
    }
  ];
  return (
    <div className="Merch">
      {stock.map(item => (
        <div>
          <img src={item.imgPath}></img>
          <h2>{item.name}</h2>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default Merch;
