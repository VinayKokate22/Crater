import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftsection">
        <ul>
          <li className="logo">Crater</li>
        </ul>
      </div>
      <div className="rightsection">
        <ul>
          <li>About</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
