/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardTemplate from '../CardTemplate/CardTemplate';
import NewTemplateCard from '../NewTemplateCard/NewTemplateCard';

const testArr = [
    {
        id: 1,
        title: 'Page1',
        img: 'https://cdn.dribbble.com/users/3547568/screenshots/11655713/media/1b6cf34aa90b0a45773a7f8594802a29.jpg?compress=1&resize=400x300',
    },
    {
        id: 2,
        title: 'Page2',
        img: 'https://cdn.freebiesbug.com/wp-content/uploads/2015/09/personal-website-template-psd-580x435.jpg',
    },
    {
        id: 3,
        title: 'Page3',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZM7E0aOEXuKNhMCyNInM4hLRahVNladEbg&usqp=CAU',
    },
    {
        id: 4,
        title: 'Page4',
        img: 'https://themeforest.img.customer.envatousercontent.com/files/303352037/01_preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=69eebcf44686183176c2b331e63f1a64',
    },
    {
        id: 5,
        title: 'Page5',
        img: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/37331/image-upload/Devfolio%20Free%20HTML%20Website%20Template.jpg',
    },
    {
        id: 6,
        title: 'Page6',
        img: 'https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/60b6b54cca1a1af1b2a9acea_gallery01.jpeg',
    },
    {
        id: 7,
        title: 'Page7',
        img: 'https://designshack.net/wp-content/uploads/sketch-website-templates.jpg',
    },
];

const UserTemplates = (templatesArr) => {
    templatesArr = testArr;

    return (
        <Container id="user-templates" fixed sx={{ mt: 2 }}>
            <Box>
                <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
                    Plantillas:
                </Typography>
                {templatesArr.length === 0 ? (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>Cargando...</Typography>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={1}>
                        {templatesArr.map((page) => (
                            <Grid key={page.id} item xs={12} sm={6} md={4} lg={2.4}>
                                <CardTemplate title={page.title} cover={page.img} />
                            </Grid>
                        ))}
                        <Grid item xs={12} sm={6} md={4} lg={2.4}>
                            <NewTemplateCard />
                        </Grid>
                    </Grid>
                )}
            </Box>
        </Container>
    );
};

export default UserTemplates;
