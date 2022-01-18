import React from 'react';
import { Card as CardUI, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
// import './NewPageCard.scss';

const NewPageCard = () => {
    return (
        <Box
            sx={{
                a: {
                    textDecoration: 'none',
                },
            }}
        >
            <Link to="/webmaker">
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
            </Link>
        </Box>
    );
};

export default NewPageCard;
