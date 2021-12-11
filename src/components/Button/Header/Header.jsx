import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box
                        component="img"
                        sx={{
                            height: '100%',
                            width: 150,
                        }}
                        alt="Logo"
                        src="https://firebasestorage.googleapis.com/v0/b/platzi-master-cms.appspot.com/o/Logo%20Plataforma%201.png?alt=media&token=49037ca8-9eb8-4ea7-80f1-a1aa14f58b50"
                    />
                    <Navbar />
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>J</Avatar>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
