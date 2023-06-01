import React from "react";
import { NavLink } from "react-router-dom";
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "13px",
  margin: "0 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};
function NavBar() {
  return <nav>
    <NavLink exact to="/" style={linkStyles} activeStyle={{background:"maroon"}}>Home</NavLink>
    <NavLink exact to="/movies"style={linkStyles}  activeStyle={{background:"maroon"}}>Movies</NavLink>
    <NavLink exact to="/directors" style={linkStyles}  activeStyle={{background:"maroon"}}>Directors</NavLink>
    <NavLink exact to="/actors" style={linkStyles}  activeStyle={{background:"maroon"}}>Actors</NavLink>
  </nav>;
}

export default NavBar;
