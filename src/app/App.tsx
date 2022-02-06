import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../features/redux/store';
import { AppNavigation } from '../pages/ui/app-navigation';

export const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <AppNavigation />
                </Router>
            </Provider>
        </React.StrictMode>
    );
};
