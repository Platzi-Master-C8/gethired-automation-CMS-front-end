import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Webmaker } from '../pages/webmaker/Webmaker';

import NotFound from '../pages/NotFound/NotFound';

import './style.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/profile" element={<h1>User Profile</h1>} />
                <Route exact path="/edit" element={<h1>User Profile Edit</h1>} />
                <Route exact path="/webmaker" element={<Webmaker />} />
                <Route exact path="/preview" element={<h1>Preview</h1>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
