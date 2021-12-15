/* eslint-disable react/prop-types */
import React from 'react';
import { Card as CardUI } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

import './Card.scss';

const Card = ({ title, description, cover }) => {
    return (
        <CardUI variant="outlined" className="card">
            <img src={cover} alt={title} className="card__image" />

            <div className="card__details">
                <div className="buttons">
                    <Button
                        className="card-button"
                        endIcon={<EditIcon sx={{ width: '18px', height: '18px' }} />}
                        size="small"
                        variant="contained"
                        sx={{
                            mb: '10px',
                            minWidth: '115px',
                            padding: '5px 10px',
                            color: '#fff',
                            bgcolor: '#555BFF',
                            fontFamily: 'Mulish',
                            fontWeight: 'bold',
                            fontSize: '14px',
                        }}
                    >
                        Editar
                    </Button>
                    <Button
                        className="card-button"
                        endIcon={<PublicIcon sx={{ width: '18px', height: '18px' }} />}
                        size="medium"
                        variant="contained"
                        sx={{
                            minWidth: '115px',
                            padding: '5px 10px',
                            color: '#fff',
                            bgcolor: '#555BFF',
                            fontFamily: 'Mulish',
                            fontWeight: 'bold',
                            fontSize: '14px',
                        }}
                    >
                        Visitar
                    </Button>
                </div>

                <p>{title}</p>
                <p>{description}</p>
            </div>
        </CardUI>
    );
};

export default Card;
