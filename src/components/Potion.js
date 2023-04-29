import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import '../styles/Potion.css'

const Potion = () => {
    return (
        <div className="Potion">
            <p>Here's a Potion!</p>
            <Link exact to="/">Go back</Link>
        </div>
    )
};

export default Potion;