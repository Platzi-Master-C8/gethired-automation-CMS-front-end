import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProfile } from '../pages/UserProfile/UserProfile';
import NotFound from '../pages/NotFound/NotFound';

import './style.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/profile" element={<h1>User Profile</h1>} />
                <Route exact path="/edit" element={<h1>User Profile Edit</h1>} />
                <Route exact path="/webmaker" element={<h1>Web Maker</h1>} />
                <Route exact path="/preview" element={<h1>Preview</h1>} />
                <Route exact path="/user" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
