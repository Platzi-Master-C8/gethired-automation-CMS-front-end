import React from 'react';
import Grid from '@mui/material/Grid';
import { ComponentsMenu } from '../../components/ComponentsMenu/ComponentsMenu';
import Header from '../../components/Header/Header';
import CanvasWebMaker from '../../components/CanvasWebMaker/CanvasWebMaker';

const Webmaker = () => {
    return (
        <React.Fragment>
            <Header />
            <Grid container>
                <Grid item xs={2}>
                    <ComponentsMenu />
                </Grid>
                <Grid item xs={10}>
                    <CanvasWebMaker />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export { Webmaker };
