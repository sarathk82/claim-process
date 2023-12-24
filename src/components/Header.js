// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './Header.css';

const Header = ({ isNavBarExpanded, toggleNavBar }) => {
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <div className={`header-wrapper ${isNavBarExpanded ? 'sidebar-open' : ''}`}>
            <header>
                <div className={`hamburger-menu ${isNavBarExpanded ? 'active' : ''}`} onClick={toggleNavBar}>
                    <i className={`fas ${isNavBarExpanded ? 'fa-times' : 'fa-bars'}`} />
                </div>
                <div>Claims Processing</div>
                <div className="profile-icon" onClick={toggleProfile}>
                    <i className={`fas fa-user-circle ${showProfile ? 'active' : ''}`} />
                    {showProfile && (
                        <div className="profile-dropdown">
                            <p>User ID: 12345</p>
                            <Link to="/logout">Logout</Link>
                        </div>
                    )}
                </div>
            </header>
            <div className={`sidebar ${isNavBarExpanded ? 'open' : ''}`}>
                <nav>
                    <div className="menu-item">
                        <Link to="/projects">Projects</Link>
                        <div className="submenu">
                            <Link to="/create-project">Create</Link>
                            <Link to="/view-projects">View</Link>
                        </div>
                    </div>
                    <div className="menu-item">
                        <Link to="/teams">Teams</Link>
                        <div className="submenu">
                            <Link to="/create-team">Create</Link>
                            <Link to="/view-teams">View</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
