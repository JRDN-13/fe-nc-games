import { Link } from "react-router-dom";
import React from "react";

function Nav() {
    return (
        <>
        <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/">Reviews</Link>
        <Link to="/">Categoroies</Link>
        <Link to="/">Users</Link>
        </nav>
        </>
    )
}

export default Nav