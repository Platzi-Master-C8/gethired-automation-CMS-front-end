/* eslint-disable react/prop-types */
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// eslint-disable-next-line no-unused-vars
const EditComponent = ({ icon, text }) => (
    <ListItem disablePadding draggable>
        <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
    </ListItem>
);

export default EditComponent;
