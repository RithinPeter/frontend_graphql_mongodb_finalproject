import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Health Monitoring System</h1>
            <p>This application helps nurses and patients manage health records efficiently.</p>
            <div>
                <Link to="/login" className="button-link">Login</Link>
                <Link to="/login?register=true" className="button-link">Register</Link>
            </div>
        </div>
    );
};

export default Home;
