import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="flexCenter h-menu" style={getMenuStyle(menuOpen)}>
            <a href="#Residencies">Residencies</a>
            <a href="#Value">Our Value</a>
            <a href="#Contact">Contact Us</a>
            <a href="#GetStarted">Get Started</a>
            <button className="button">
              <a href="#Contact">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* Responsive Version (Collapsed)*/}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen((state) => !state)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
