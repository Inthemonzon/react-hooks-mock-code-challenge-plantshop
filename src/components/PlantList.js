import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData }) {
  console.log(plantData)

   const plants = plantData.map((plant) => {
     return(
       <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>
     )
   })
  return (
    <ul className="cards">{plants}</ul>
  );
}

export default PlantList;
