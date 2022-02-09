/* eslint-disable react/prop-types */
import React from 'react';
import { Card as CardUI } from '@mui/material';

import './CardTemplate.scss';

const CardTemplate = ({ title, cover }) => {
    return (
        <CardUI variant="outlined" className="card">
            <img src={cover} alt={title} className="card__image" />
        </CardUI>
    );
};

export default CardTemplate;
