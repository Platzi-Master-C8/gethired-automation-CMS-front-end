import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import Navbar from '../Navbar/Navbar';
import NavbarWebMaker from '../NavbarWebMaker/NavbarWebMaker';
import SearchAppBar from '../Search/Search';
import Menu from '../Menu/Menu';

const Header = () => {
    const pathNameLocation = window.location.pathname;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    background: '#fff',
                    boxshadow: 'none',
                    borderBottom: '2px solid #555bff',
                }}
            >
                <Toolbar
                    sx={{
                        display: 'grid',
                        gridAutoFlow: 'column',
                        gridTemplateColumns: '1fr auto',
                    }}
                >
                    <Link to="/">
                        <Box
                            component="img"
                            alt="Logo"
                            src="https://firebasestorage.googleapis.com/v0/b/platzi-master-cms.appspot.com/o/Logo%20Plataforma%201.png?alt=media&token=49037ca8-9eb8-4ea7-80f1-a1aa14f58b50"
                        />
                    </Link>
                    <SearchAppBar />
                    {pathNameLocation === '/webmaker' ? <NavbarWebMaker /> : <Navbar />}
                    <Avatar />
                    <Menu />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
