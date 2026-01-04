import { useParams } from "react-router-dom";
import data from "../data/properties.json";
import Gallery from "./Gallery";

export default function PropertyPage() {
  const { id } = useParams();
  const property = data.properties.find((p) => p.id === id);

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="property-page">
      <h1>{property.location}</h1>

      {/* Gallery of images */}
      <Gallery images={property.pictures} />

      <p className="price">£{property.price.toLocaleString()}</p>

      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>

      {/* Description */}
      <div className="description">
        <h2>Description</h2>
        <p dangerouslySetInnerHTML={{ __html: property.description }}></p>
      </div>

      {/* Floor Plan */}
      {property.floorPlan && (
        <div className="floor-plan">
          <h2>Floor Plan</h2>
          <img src={property.floorPlan} alt="Floor Plan" style={{ width: "100%", maxWidth: "500px", borderRadius: "8px" }} />
        </div>
      )}
              
      {/* Map */}
      {property.map && (
        <div className="map-section">
          <h2>Map</h2>
          <iframe
            src={property.map}
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
}
