// ImageContainer.jsx
import React from 'react';

const ImageContainer = ({ image }) => {
  return (
    <div 
      className="image-container"
      style={{ backgroundImage: `url(${image})` }} // Set the background image using inline styles
    />
  );
};

export default ImageContainer;
