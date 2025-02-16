import React from "react";


const Header = () => {
  return (
    <header id="header" className="header">
      <div className="row" style={{ justifyContent: "space-between", width: "98%", alignItems: "center" }}>
        <div style={{ display: "flex" }}>
          <span style={{ fontSize: "30px", cursor: "pointer", color: "black", marginLeft: "10px", paddingTop: "3px" }}>
            
          </span>
          <p className="pageName" style={{ color: "rgba(0, 0, 0, 0.375)", alignSelf: "center", paddingLeft: "10px" }}>
            
          </p>
        </div>
        <div style={{ fontSize: "20px" }}>
          <span className="material-symbols-outlined"></span>
          <span className="material-symbols-outlined"></span>
          <span className="material-symbols-outlined"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;