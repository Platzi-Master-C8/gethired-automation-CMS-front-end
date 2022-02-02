import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { styled } from '@mui/material/styles';

const ListNavBar = styled(List)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 0;
    margin-right: 20px;
`;

const ListItemNavBar = styled(ListItem)`
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
    padding-top: 0;
    transition: 0.3s;
    border-bottom: 3px solid transparent;

    :hover {
        border-bottom: 3px solid #555bff;
        transition: 0.3s;
    }
`;

const ListItemIconNavBar = styled(ListItemIcon)`
    place-content: center;
    color: #373f41;
    font-size: 20px;
`;

const ListItemTextNavBar = styled(ListItemText)`
    text-align: center;
    white-space: nowrap;
    color: #373f41;
    font-size: 14px;
`;

const Navbar = () => {
    return (
        <ListNavBar sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' } }}>
            <ListItemNavBar component="a" href="#">
                <ListItemIconNavBar>
                    <EmailOutlinedIcon />
                </ListItemIconNavBar>
                <ListItemTextNavBar primary="Mensajes" />
            </ListItemNavBar>
            <ListItemNavBar component="a" href="#">
                <ListItemIconNavBar>
                    <NotificationsNoneOutlinedIcon />
                </ListItemIconNavBar>
                <ListItemTextNavBar primary="Notificaciones" />
            </ListItemNavBar>
            <ListItemNavBar component="a" href="#">
                <ListItemIconNavBar>
                    <GroupsOutlinedIcon />
                </ListItemIconNavBar>
                <ListItemTextNavBar primary="Foros" />
            </ListItemNavBar>
            <ListItemNavBar component="a" href="#">
                <ListItemIconNavBar>
                    <BusinessCenterOutlinedIcon />
                </ListItemIconNavBar>
                <ListItemTextNavBar primary="Empleos" />
            </ListItemNavBar>
            <ListItemNavBar component="a" href="#">
                <ListItemIconNavBar>
                    <ArticleOutlinedIcon />
                </ListItemIconNavBar>
                <ListItemTextNavBar primary="Blog" />
            </ListItemNavBar>
            <ListItemNavBar component="a" href="#">
                <ListItemIconNavBar>
                    <WebOutlinedIcon />
                </ListItemIconNavBar>
                <ListItemTextNavBar primary="Mi sitio web" />
            </ListItemNavBar>
        </ListNavBar>
    );
};

export default Navbar;
