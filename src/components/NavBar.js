import React, { useState } from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <ul >
            <li onClick={refreshPage}><Link to="/">POČETNA</Link></li>
            <li onClick={refreshPage}><Link to="/contact">KONTAKT</Link></li>
            <li onClick={refreshPage}><Link to="/experience">ISKUSTVA</Link></li>
        </ul>
    )
}
export default NavBar;