// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './Header.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowProfile(false);
    };

    const toggleProfile = () => {
        setShowProfile(!showProfile);
        setShowMenu(false);
    };

    return (
        <header>
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={`fas fa-bars ${showMenu ? 'active' : ''}`}></i>
                {showMenu && (
                    <div className="menu">
                        <Link to="/create-project">Create Project</Link>
                        <Link to="/view-projects">View Projects</Link>
                        <Link to="/create-team">Create Team</Link>
                        <Link to="/view-teams">View Teams</Link>
                    </div>
                )}
            </div>
            <div><h3>  Complan Claims Processing </h3></div>
            <div className="profile-icon">
                <i className={`fas fa-user-circle ${showProfile ? 'active' : ''}`} onClick={toggleProfile}></i>
                {showProfile && (
                    <div className="profile-dropdown">
                        <p>User ID: 12345</p>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
