import React from 'react';

const Popup = ({ children, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Popup;
