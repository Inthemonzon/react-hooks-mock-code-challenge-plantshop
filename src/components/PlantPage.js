import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const onSearchData = searchTerm => {
    setSearchValue(searchTerm)
  }

  const onNewPlant = plantObject => {
    setPlantData([...plantData, plantObject])
  }

  useEffect(() => {
    fetch ("http://localhost:6001/plants")
    .then (Response => Response.json())
    .then (data => setPlantData(data))
  },[])

  const filteredPlants = plantData.filter(plant => {
    return plant.name.toLowerCase().includes(searchValue.toLowerCase())
  })

 
  return (
    <main>
      <NewPlantForm onNewPlant={onNewPlant} />
      <Search plantData={plantData} onSearchData={onSearchData}/>
      <PlantList plantData={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
