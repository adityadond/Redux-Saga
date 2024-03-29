import React from "react";
import "./Drawer.css"; // Import your CSS file for styling
import CloseIcon from "@mui/icons-material/Close";

const Drawer = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the drawer if user clicks on backdrop
    }
  };

  return (
    <>
      {isOpen && (
        <div className="drawer-backdrop" onClick={handleBackdropClick}>
          <div className="drawer-content">
            {/* Add your content inside the drawer */}
            <h2>Drawer Content</h2>
            <p>This is some example content inside the drawer.</p>
          </div>
          <CloseIcon onClick={onClose} className="closebutton">
            Close Drawer
          </CloseIcon>
        </div>
      )}
    </>
  );
};

export default Drawer;
