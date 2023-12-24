// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './Header.css';

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showProfile, setShowProfile] = useState(false);


    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <div className="header-wrapper">
            <header>
                <div className={`hamburger-menu ${showSidebar ? 'active' : ''}`} onClick={toggleSidebar}>
                    <i className={`fas ${showSidebar ? 'fa-times' : 'fa-bars'}`} />
                </div>
                <div> Claims Processing</div>
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
            <div className={`content ${showSidebar ? 'sidebar-open' : ''}`}>
                <h1>Welcome to Home Page</h1>
                <p>This is the home page content.</p>
            </div>


            <div className={`sidebar ${showSidebar ? 'open' : ''}`}>
                <nav>
                    <div className="menu-item">
                        <Link to="#">Projects</Link>
                        <div className="submenu">
                            <Link to="/create-project">Create</Link>
                            <Link to="/view-projects">View</Link>
                        </div>
                    </div>
                    <div className="menu-item">
                        <Link to="#">Teams</Link>
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
