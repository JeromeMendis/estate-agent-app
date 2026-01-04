import { useEffect, useState } from "react";
import propertiesData from "../data/properties.json";
import SearchForm from "./SearchForm";
import PropertyCard from "./PropertyCard";
import Favourites from "./Favourites";
import { filterProperties } from "../utils/filterProperties";

export default function SearchResults() {
  const [filters, setFilters] = useState({});
  const [results, setResults] = useState(propertiesData.properties);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setResults(filterProperties(propertiesData.properties, filters));
  }, [filters]);

  const addFavourite = (property) => {
    if (!favourites.find((p) => p.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter((p) => p.id !== id));
  };

  return (
    <div className="page">
      <h1>Property Search</h1>

      <SearchForm setFilters={setFilters} />

      <div className="layout">
        <div className="results">
          {results.map((p) => (
            <PropertyCard
              key={p.id}
              property={p}
              onFavourite={addFavourite}
            />
          ))}
        </div>

        <Favourites
          favourites={favourites}
          removeFavourite={removeFavourite}
        />
      </div>
    </div>
  );
}
