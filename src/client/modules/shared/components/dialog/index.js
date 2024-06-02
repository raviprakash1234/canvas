import React from "react";
import "./Dialog.css";

const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <div className="dialog-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="dialog-close-button">
            &times;
          </button>
        </div>
        <div className="dialog-body">{children}</div>
        <div className="dialog-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
