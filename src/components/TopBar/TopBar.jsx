import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";
import Icon from "../Icons/Icon.jsx";
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="links">
        <Link to="/">
          <img src="src/assets/react-core-concepts.png" alt="Stylized brain" />
        </Link>
        <div className="nav-links">
          <Link to="/">
            <Icon name="heart" className="w-6 h-6 text-blue-500" />
            {/* Log In{" "} */}
          </Link>
          <Link to="/">
            <Icon name="user" className="w-6 h-6 text-blue-500" />
            {/* Favorites{" "} */}
          </Link>
          <Link to="/">
            <Icon name="cart" className="w-6 h-6 text-blue-500" />
            {/* Cart */}
          </Link>
        </div>
      </div>
    </div>
  );
}
