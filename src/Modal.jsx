import React from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";

function Modal({ show, onClose, children }) {
  const dispatch = useDispatch();
  if (!show) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      data-testid="modal-overlay"
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
