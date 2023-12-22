
import React from 'react';
import Header from '../components/Header'; // Adjust the path as needed

const Home = () => {
    return (
        <div>
            <Header /> {/* Include the Header component */}
            <div className="home-content" >
                {/* Your home page content */}
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page content.</p>
            </div>
        </div>
    );
};

export default Home;
