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

const Navbar = () => {
    return (
        <List>
            <ListItem component="a" href="#">
                <ListItemIcon>
                    <EmailOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Messages" />
            </ListItem>
            <ListItem component="a" href="#">
                <ListItemIcon>
                    <NotificationsNoneOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
            </ListItem>
            <ListItem component="a" href="#">
                <ListItemIcon>
                    <GroupsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Forum" />
            </ListItem>
            <ListItem component="a" href="#">
                <ListItemIcon>
                    <BusinessCenterOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Jobs" />
            </ListItem>
            <ListItem component="a" href="#">
                <ListItemIcon>
                    <ArticleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Blogpost" />
            </ListItem>
            <ListItem component="a" href="#">
                <ListItemIcon>
                    <WebOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="My Website" />
            </ListItem>
        </List>
    );
};

export default Navbar;
