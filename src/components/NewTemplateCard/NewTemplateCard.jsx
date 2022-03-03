/* eslint-disable react/prop-types */
import React from 'react';
import { Card as CardUI, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

const NewTemplatesCard = ({ urlWebMaker, userId }) => {
    return (
        <Box
            sx={{
                a: {
                    textDecoration: 'none',
                },
            }}
        >
            <a href={`${urlWebMaker}${userId}`}>
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
                                    <AddCircleOutlineIcon sx={{ width: '100px', height: '100px' }} />
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component="p"
                                    sx={{ textAlign: 'center', lineHeight: '1.5rem', fontSize: '1.2rem' }}
                                >
                                    Nueva página en blanco
                                </Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </CardUI>
            </a>
        </Box>
    );
};

export default NewTemplatesCard;
