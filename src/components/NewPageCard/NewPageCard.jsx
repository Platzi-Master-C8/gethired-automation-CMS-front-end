import React from 'react';
import { Card as CardUI } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import './NewPageCard.scss';

const NewPageCard = () => {
    return (
        <CardUI className="card">
            <AddCircleOutlineIcon sx={{ width: '100px', height: '100px' }} />
            <span>Nueva pagina</span>
        </CardUI>
    );
};

export default NewPageCard;
