import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/SuperPotion.css"

const SuperPotion = () => {
    return (
        <div className="SuperPotion">
            <p>Here's a Super Potion!</p>
            <Link exact to="/">Go back</Link>
        </div>
    )
};

export default SuperPotion;