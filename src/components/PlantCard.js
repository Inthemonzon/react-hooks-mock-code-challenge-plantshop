import React, {useState} from "react";

function PlantCard({name, image, price}) {
  const [stockStatus, setStockStatus] = useState(true)
  const handleStock = () => {
    setStockStatus(!stockStatus)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stockStatus ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
