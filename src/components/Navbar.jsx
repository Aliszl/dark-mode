import React, { useState } from "react";
// import { useDarkMode } from "../hooks/UseDarkMode";

const Navbar = () => {
  // const [darkMode, setDarkMode, handleChanges] = useDarkMode();
  const [darkMode, setDarkMode] = useState(false);
  // const isDarkMode = useDarkMode();

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className={darkMode ? "navbar dark-mode" : "navbar"}>
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle dark-mode">
        <div
          onClick={toggleMode}
          // darkMode => handleChanges(darkMode)
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
