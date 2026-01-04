import { Link } from "react-router-dom";

export default function PropertyCard({ property, onFavourite }) {
  return (
    <div className="property-card">
      <img
        src={property.pictures && property.pictures.length > 0 ? `/${property.pictures[0]}` : "/images/placeholder.jpg"}
        alt={property.location}
        className="property-image"
      />

      <h3>£{property.price.toLocaleString()}</h3>
      <p>{property.location}</p>

      {/* Flex container for actions */}
      <div className="card-actions">
        <Link to={`/property/${property.id}`}>View</Link>
        <button className="favourite-btn" onClick={() => onFavourite(property)}>❤️</button>
      </div>
    </div>
  );
}
