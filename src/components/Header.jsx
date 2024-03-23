// Header.jsx
import React from 'react';

const Header = ({ leftTexts, rightButtonText, onRightButtonClick }) => {
  return (
    <div className="header">
      <div className="left-header-texts">
        {leftTexts.map((text, index) => (
          <div key={index} className="left-text-item">{text}</div>
        ))}
      </div>
      <button onClick={onRightButtonClick} className="right-button">
        {rightButtonText}
        <span className="right-button-img"></span> {/* Image container */}
      </button>
    </div>
  );
};

export default Header;
