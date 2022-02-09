import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h3>Pagina No Encontrada</h3>
        <Link to="/">Volver al inicio</Link>
    </div>
);

export default NotFound;
