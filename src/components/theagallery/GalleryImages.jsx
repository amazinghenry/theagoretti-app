import React from "react";
import TheaGallery from "./TheaGallery";
import galleryImages from "../../data/galleryImages.js";

const GalleryImages = () => {
  return (
    <div className="gallery-container">
      <h2>Our Photo Gallery</h2>
      <TheaGallery images={galleryImages} />
    </div>
  );
};

export default GalleryImages;
