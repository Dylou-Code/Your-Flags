import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "./Logo.jsx";

const Navigation = () => {
    return (
        <header>
            <div className="navigation">
                <NavLink to="/">
                    <Logo/>
                </NavLink>
                <NavLink to="/country">
                   <p>Test</p>
                </NavLink>
            </div>
        </header>

    );
};

export default Navigation;