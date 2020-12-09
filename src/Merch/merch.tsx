import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import './merch.css';

interface storeItem {
  name: string;
  price: number;
  imgPath: string;
  id: number;
}
const Merch: React.FC = () => {
  const stock: storeItem[] = [
    {
      name: "Fall 2020 T-shirt (bird)",
      price: 35,
      imgPath: "bird-tshirt.png",
      id:1
    },
    {
      name: "Fall 2020 T-shirt (skull)",
      price: 35,
      imgPath: "skull-tshirt.png",
      id: 2
    }
  ];
  return (
    <div className="Merch">
      {stock.map(item => (
        <div>
          <img src={item.imgPath}></img>
          <h2>{item.name}</h2>
          <span>{item.price}</span>
          <Link to={`merch/${item.id}`} className="merch-link">details</Link>
        </div>
      ))}
    </div>
  );
}

export default Merch;
