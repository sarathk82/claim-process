// Home.js

import React, { useState } from 'react';
import Header from '../components/Header'; // Adjust the path as needed
import './Home.css'; // Import the CSS file

const Home = () => {
    const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);

    const toggleNavBar = () => {
        setIsNavBarExpanded(!isNavBarExpanded);
    };

    return (
        <div className="home-page">
            <Header isNavBarExpanded={isNavBarExpanded} toggleNavBar={toggleNavBar} />
            <div className={`content ${isNavBarExpanded ? 'sidebar-open' : ''}`}>
                <div className="home-content">
                    <h1>Welcome to the Home Page</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt in sem sed tempor.
                        Fusce vel turpis vitae lacus ultrices tempor non in massa.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
