// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './Header.css';

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [showProjectsSubMenu, setShowProjectsSubMenu] = useState(false);
    const [showTeamsSubMenu, setShowTeamsSubMenu] = useState(false);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    const toggleProjectsSubMenu = () => {
        setShowProjectsSubMenu(!showProjectsSubMenu);
        setShowTeamsSubMenu(false); // Hide Teams submenu when Projects submenu is toggled
    };

    const toggleTeamsSubMenu = () => {
        setShowTeamsSubMenu(!showTeamsSubMenu);
        setShowProjectsSubMenu(false); // Hide Projects submenu when Teams submenu is toggled
    };

    const handleProjectsMouseLeave = () => {
        setShowProjectsSubMenu(false);
    };

    const handleTeamsMouseLeave = () => {
        setShowTeamsSubMenu(false);
    };

    return (
        <header>
            <div className="menu">
                <div className="menu-item" onMouseEnter={toggleProjectsSubMenu} onMouseLeave={handleProjectsMouseLeave}>
                    <Link to="#">Projects</Link>
                    {showProjectsSubMenu && (
                        <div className="submenu" onMouseEnter={toggleProjectsSubMenu} onMouseLeave={handleProjectsMouseLeave}>
                            <Link to="/create-project">Create</Link>
                            <Link to="/view-projects">View</Link>
                        </div>
                    )}
                </div>
                <div className="menu-item" onMouseEnter={toggleTeamsSubMenu} onMouseLeave={handleTeamsMouseLeave}>
                    <Link to="#">Teams</Link>
                    {showTeamsSubMenu && (
                        <div className="submenu" onMouseEnter={toggleTeamsSubMenu} onMouseLeave={handleTeamsMouseLeave}>
                            <Link to="/create-team">Create</Link>
                            <Link to="/view-teams">View</Link>
                        </div>
                    )}
                </div>
            </div>

            <div><h3>Claims Processing</h3></div>
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
