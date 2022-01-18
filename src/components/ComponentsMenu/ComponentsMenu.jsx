/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
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
import { ListItemIcon } from '@mui/material';

const ComponentsMenu = ({ componentList, handleDragStart, handleDragEnd }) => {
    const [open, setOpen] = React.useState({
        contenedores: true,
        titulos: true,
        imagenes: false,
        botones: false,
    });

    const icons = {
        contenedores: <AddToQueueIcon />,
        titulos: <TextFieldsIcon />,
        imagenes: <ImageIcon />,
        botones: <SmartButtonIcon />,
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Paper elevation={0} sx={{ width: '100%' }}>
                <List>
                    <ListItemText
                        primary="Componentes"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottom: '2px solid rgba(0,0,0,0.2)',
                            minWidth: '224px',
                            minHeight: '48px',
                        }}
                    />
                    <div>
                        {componentList.map((component) => (
                            <List key={component.id}>
                                <ListItemButton
                                    key={component.id}
                                    onClick={() =>
                                        setOpen({
                                            ...open,
                                            [component.id]: !open[component.id],
                                        })
                                    }
                                >
                                    <ListItemIcon>{icons[component.id]}</ListItemIcon>
                                    <ListItemText primary={component.title} />
                                </ListItemButton>
                                {open[component.id] && (
                                    <div
                                        style={{
                                            display: 'grid',
                                            padding: '5px',
                                            gridTemplateColumns: '1fr 1fr',
                                            gridGap: '12px',
                                        }}
                                    >
                                        {component.children.map((child) => (
                                            <div
                                                key={child.id}
                                                draggable
                                                onDragStart={(e) => handleDragStart(e, child)}
                                                onDragEnd={(e) => handleDragEnd(e, 'boton')}
                                                id={child.id}
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'grab',
                                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                                    borderRadius: '5px',
                                                    padding: '5px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <img
                                                    src={child.image}
                                                    alt={child.alt}
                                                    style={{
                                                        width: '100px',
                                                    }}
                                                    draggable="false"
                                                />
                                                <figcaption>{child.name}</figcaption>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </List>
                        ))}
                    </div>
                </List>
            </Paper>
        </Box>
    );
};

export { ComponentsMenu };
