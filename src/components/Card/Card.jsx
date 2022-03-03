/* eslint-disable react/prop-types */
import React from 'react';
import { Card as CardUI, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

import './Card.scss';

const Card = ({ type, title, cover, urlWebMaker, templateId, userId }) => {
    return (
        <div className="card__container">
            <CardUI variant="outlined" className="card" sx={{ margin: '0' }}>
                <img src={cover} alt={title} className="card__image" />

                <div className="card__detail">
                    <Typography sx={{ fontSize: '20px', fontWeight: 'semi-bold' }}>{title}</Typography>
                    <div className="buttons">
                        {type === 'userPage' ? (
                            <React.Fragment>
                                <a href={`${urlWebMaker}${templateId}${userId}`} style={{ textDecoration: 'none' }}>
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
                                </a>
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
                            </React.Fragment>
                        ) : (
                            <a
                                href={`${urlWebMaker}${templateId}${userId}`}
                                style={{ textDecoration: 'none', alignSelf: 'center' }}
                            >
                                <Button
                                    className="card-button"
                                    endIcon={<EditIcon sx={{ width: '18px', height: '18px' }} />}
                                    size="small"
                                    variant="contained"
                                    sx={{
                                        mb: '10px',
                                        minWidth: '85%',
                                        padding: '5px 10px',
                                        color: '#fff',
                                        bgcolor: '#555BFF',
                                        fontFamily: 'Mulish',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                    }}
                                >
                                    Usar Template
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            </CardUI>
            <Typography variant="body1" className="card__title" sx={{ margin: '5px' }}>
                {title}
            </Typography>
        </div>
    );
};

export default Card;
