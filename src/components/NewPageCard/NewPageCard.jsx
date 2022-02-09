import React from 'react';
import { Card as CardUI, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
// import './NewPageCard.scss';

const NewPageCard = () => {
    return (
        <Box
            sx={{
                a: {
                    textDecoration: 'none',
                },
            }}
            id="new-page-card"
        >
            <CardUI sx={{ width: '200px', height: '250px' }}>
                <CardActionArea sx={{ width: '100%', height: '100%' }}>
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="paragrapg" component="p">
                                <AddCircleOutlineIcon sx={{ width: '150px', height: '150px' }} />
                            </Typography>
                            <Typography variant="h5" component="p">
                                Nueva pagina
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </CardUI>
        </Box>
    );
};

export default NewPageCard;
