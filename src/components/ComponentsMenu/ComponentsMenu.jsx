import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageIcon from '@mui/icons-material/Image';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import ComponentItem from '../ComponentItem/ComponentItem';

// const componentes = ['Contenedor', 'Titulo', 'Imagen', 'Boton']

const ComponentsMenu = () => {
    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={{ display: 'flex' }}>
            <Paper elevation={0} sx={{ maxWidth: 256 }}>
                <List>
                    <ListItemButton
                        sx={{ borderBottom: '2px solid rgba(0,0,0,0.2)', minWidth: '224px' }}
                        onClick={() => setOpen(!open)}
                    >
                        <ListItemText primary="Componentes" />
                    </ListItemButton>
                    {open && (
                        <div>
                            <ComponentItem icon={<AddToQueueIcon />} text="Contenedor" />
                            <ComponentItem icon={<TextFieldsIcon />} text="Titulo" />
                            <ComponentItem icon={<ImageIcon />} text="Imagen" />
                            <ComponentItem icon={<SmartButtonIcon />} text="Boton" />
                        </div>
                    )}
                </List>
            </Paper>
        </Box>
    );
};

export { ComponentsMenu };
