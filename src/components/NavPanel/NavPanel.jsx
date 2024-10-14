import React from "react";
import { Link } from "react-router-dom";
import "./NavPanel.css";
export default function NavPanel() {
  return (
    <div className="navpanel">
      <div className="navlinks">
        <Link to="/"> BestSellers </Link>
        <Link to="/"> Dev & Tech </Link>
        <Link to="/"> Business & Finance </Link>
        <Link to="/"> Personal Development </Link>
        <Link to="/"> Languages </Link>
        <Link to="/"> Art & Design </Link>
        <Link to="/"> Games </Link>
        <Link to="/"> Others </Link>

        {/* <Link to="/"> Home </Link>
        <Link to="/"> Favorites </Link>
        <Link to="/"> Science </Link>
        <Link to="/"> Sport </Link>
        <Link to="/"> Photography </Link> */}
      </div>
    </div>
  );
}
