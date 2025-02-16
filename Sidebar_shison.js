import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        style={styles.hamburger}
        aria-label="Toggle Sidebar"
      >
        &#9776; {/* Hamburger icon */}
      </button>
      
      {/* Sidebar */}
      <aside style={{ ...styles.sidenav, width: isOpen ? "230px" : "0px",paddingTop:'80px'}}>
        <div className="sidenav-header">
          <div className="row d-flex" style={{ alignItems: "center", paddingLeft: "10px", flexWrap: "nowrap" }}>
            <br/>
            <h6>Hong Kong Metropolitan University</h6>
          </div>
        </div>
        <ul className="sidebar-list">
          <li className="functions" onClick={() => navigate("/")}>
            <h6>Dashboard</h6>
          </li>
          <li className="functions" onClick={() => navigate("/documentmanagement")}>
            <h6>Document Management</h6>
          </li>
          <li className="functions" onClick={() => navigate("/view")}>
            <h6>View file</h6>
          </li>
          <li className="functions" onClick={() => navigate("/upload")}>
            <h6>Upload Certificate</h6>
          </li>
          <li className="functions" onClick={() => navigate("/verify")}>
            <h6>Verify Certificate</h6>
          </li>
        </ul>
      </aside>
      
      {/* Optional overlay to prevent background clicks when sidebar is open */}
      {isOpen && <div onClick={toggleSidebar} style={styles.overlay}></div>}
    </>
  );
};

const styles = {
  hamburger: {
    position: "absolute",
    top: "20px",
    left: "20px",
    fontSize: "30px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 20001,  // Make sure it's above the sidebar
  },
  sidenav: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "#FFD700", // Yellow background
    overflowX: "hidden",
    transition: "0.3s", // Smooth toggle animation
    paddingTop: "20px",
    zIndex: 9999,
    fontSize:'10px'
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Light black overlay for closing
    zIndex: 9998, // Overlay sits below the sidebar
  }
};

export default Sidebar;