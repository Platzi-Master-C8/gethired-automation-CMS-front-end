import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';

const NavbarWebMaker = () => {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <ArrowBackOutlinedIcon />
                </ListItemIcon>
                <ListItemIcon>
                    <ArrowForwardOutlinedIcon />
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PhoneAndroidOutlinedIcon />
                    <DesktopMacOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Preview" />
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary="Publicar" />
                    <ListItemIcon>
                        <WebOutlinedIcon />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default NavbarWebMaker;
