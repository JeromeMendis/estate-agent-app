import React, { useState } from "react";

export default function Gallery({ images }) {
  if (!images || images.length === 0) return null;

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="property-gallery">
      {/* Main image */}
      <img
        src={`/${mainImage}`}
        alt="Property"
        className="main-image"
      />

      {/* Scrollable thumbnails */}
      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={`/${img}`}
            alt={`Property ${index + 1}`}
            className="gallery-image"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
