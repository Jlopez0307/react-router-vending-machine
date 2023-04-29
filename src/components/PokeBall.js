import React from "react";
import { Link } from "react-router-dom";
import "../styles/PokeBall.css"

const PokeBall = () => {
    return (
        <div className="pokeball">
            <p>Here's a Poke Ball!</p>
            <Link exact to="/">Go back</Link>
        </div>
    )
};

export default PokeBall;