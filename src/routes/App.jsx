import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProfile } from '../pages/UserProfile/UserProfile';
import { Webmaker } from '../pages/webmaker/Webmaker';
import NotFound from '../pages/NotFound/NotFound';
import UserProfileEdit from '../pages/UserProfileEdit/UserProfileEdit';
import './style.scss';
import UserProvider from '../store/UserProvider';
import WebmakerProvider from '../pages/webmaker/WebmakerProvider';

const App = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<UserProfile />} />
                    <Route exact path="/edit" element={<UserProfileEdit />} />
                    <Route
                        exact
                        path="/webmaker"
                        element={
                            <WebmakerProvider>
                                <Webmaker />
                            </WebmakerProvider>
                        }
                    />
                    <Route exact path="/preview" element={<h1>Preview</h1>} />
                    <Route exact path="/user" element={<UserProfile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
};

export default App;
