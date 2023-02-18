import React from 'react';
import './style.css';

const ErrorComponent = () => {
    return (
        <div className="not-found">
            <h1 className="error-404">404</h1>
            <p className="error-desc">The page you're looking for cannot be found.</p>
        </div>
    );
};

export default ErrorComponent;
