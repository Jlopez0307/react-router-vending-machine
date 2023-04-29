import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"


const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink exact to="/pokeball">Poke-Ball</NavLink>
            <NavLink exact to="/potion">Potion</NavLink>
            <NavLink exact to="/super-potion">Super Potion</NavLink>
        </nav>

    )
}

export default Navbar;