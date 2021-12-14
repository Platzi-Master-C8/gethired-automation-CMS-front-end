import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const CanvasWebMaker = () => {
    return (
        <Container maxWidth="xl" sx={{ backgroundColor: '#E5E5E5', padding: '10px' }}>
            <Box sx={{ bgcolor: '#fff', height: '100vh', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />
        </Container>
    );
};

export default CanvasWebMaker;
