import "./TheaGallery.css";
import { useState } from "react";

const TheaGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  // Filtered Images
  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.category === filter);

  return (
    <div className="thea-gallery-container">
      {/* Filter Buttons */}
      <div className="thea-gallery-filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("event")}>Events</button>
        <button onClick={() => setFilter("team")}>Team</button>
        <button onClick={() => setFilter("community")}>Community</button>
      </div>

      {/* Gallery */}
      <div className="thea-gallery">
        {filteredImages && filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div
              key={index}
              className="thea-gallery-item animate"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={` ./galleryimages/${image.url}`}
                alt={image.caption || "Gallery Image"}
              />
              {image.caption && (
                <p className="thea-gallery-caption">{image.caption}</p>
              )}
            </div>
          ))
        ) : (
          <p>No images available for this category.</p>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="thea-gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <div className="lightbox-content">
            <img src={`./galleryimages/${selectedImage}`} alt="Full View" />
            <span
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheaGallery;
