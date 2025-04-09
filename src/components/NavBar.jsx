import React from "react";
import "../styles/navbar.css";

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <img className="navbar__logo" src="logo.svg" alt="Budget Buddy Logo" />
        <div className="navbar__text">Budget Buddy</div>
      </div>
      <div className="user_profile">Hi, Nitin</div>
    </header>
  );
}

export default NavBar;
