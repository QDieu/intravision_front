import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppNavigation } from '../pages/ui/app-navigation';

export const App = () => {
    return (
        <React.StrictMode>
            <Router>
                <AppNavigation />
            </Router>
        </React.StrictMode>
    );
};
