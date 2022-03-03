/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '../Card/Card';
import NewTemplateCard from '../NewTemplateCard/NewTemplateCard';
import getTemplates from '../../data/getTemplates';

const UserTemplatesContainer = ({ children }) => {
    return (
        <Container id="user-templates" fixed sx={{ mt: 2 }}>
            <Box>
                <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
                    Plantillas:
                </Typography>
                {children}
            </Box>
        </Container>
    );
};

const UserTemplates = ({ userId, urlWebMaker }) => {
    const [templatesArr, setTemplatesArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getTemplates()
            .then((response) => setTemplatesArr(response))
            .catch((error) => setIsError(error))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return (
            <UserTemplatesContainer>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography>Cargando...</Typography>
                    </Grid>
                </Grid>
            </UserTemplatesContainer>
        );
    } else if (isError) {
        return (
            <UserTemplatesContainer>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography>Ocurrio un error al consultar los templates disponibles :/</Typography>
                    </Grid>
                </Grid>
            </UserTemplatesContainer>
        );
    }

    return (
        <UserTemplatesContainer>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={4} lg={2.4}>
                    <NewTemplateCard urlWebMaker={urlWebMaker} userId={userId} />
                </Grid>
                {templatesArr.map((page) => (
                    <Grid key={page._id} item xs={12} sm={6} md={4} lg={2.4}>
                        <Card
                            type="defaultTemplate"
                            title={page.template_name}
                            cover={page.preview}
                            urlWebMaker={urlWebMaker}
                            templateId={page._id}
                            userId={userId}
                        />
                    </Grid>
                ))}
            </Grid>
        </UserTemplatesContainer>
    );
};

export default UserTemplates;
