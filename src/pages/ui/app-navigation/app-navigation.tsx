import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPageConnector } from '../main-page-connector';

export const AppNavigation = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPageConnector />} />
            </Routes>
        </>
    );
};
