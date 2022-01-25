import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { ComponentsMenu } from '../../components/ComponentsMenu/ComponentsMenu';
import Header from '../../components/Header/Header';
import CanvasWebMaker from '../../components/CanvasWebMaker/CanvasWebMaker';

import components from '../../data/components';
import cv from '../../data/cv-components';

const lateralMenu = {
    height: 'calc(100vh - 82px)',
    overflowY: 'auto',
};

const scrollbar = {
    '&::-webkit-scrollbar': {
        width: 8,
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(5, 5, 5, 0.2)',
        borderRadius: 4,
    },
};

const Webmaker = () => {
    const [template, setTemplate] = useState(cv);
    const [componentList, setComponentList] = useState(template.components);
    const [dragEndOverCanvas, setDragEndOverCanvas] = useState(false);
    const [dragItem, setDragItem] = useState(null);

    const handleDragStart = (e, item) => {
        setDragItem(item);
    };

    const handleDragEnd = () => {
        if (dragEndOverCanvas) {
            // console.log('drag end over canvas');
        } else {
            // console.log('drag end NOT over canvas');
        }

        setDragEndOverCanvas(false);
    };

    const handleDragEnter = () => {
        // console.log('drag enter', item, e);
        setDragEndOverCanvas(true);
    };

    const handleDragLeave = () => {
        // console.log('drag leave', item, e);
        setDragEndOverCanvas(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = () => {
        if (dragItem.type === 'container') {
            dragItem.canvasIndex = componentList.length;
            // dragItem.props.onDrop = (e) => {
            //     console.log('drop', e.target);
            //     console.log(componentList);
            // };
            // dragItem.props.onDrop = () => {console.log('drop over a container')};
            // dragItem.props.onDragEnter = () => {console.log('drag over a container')};
            // dragItem.props.onDragLeave = () => {console.log('drag leave a container')};
            // console.log('container droped');
        }
        const newComponentList = [...componentList, dragItem];
        const templateCopy = { ...template };
        templateCopy.components = newComponentList;
        setComponentList(newComponentList);
        setTemplate(templateCopy);
    };

    return (
        <React.Fragment>
            <Header />
            <Grid container>
                <Grid item xs={2} sx={[lateralMenu, scrollbar]}>
                    <ComponentsMenu
                        componentList={components}
                        handleDragStart={handleDragStart}
                        handleDragEnd={handleDragEnd}
                    />
                </Grid>
                <Grid item xs={8} sx={[lateralMenu, scrollbar]}>
                    <CanvasWebMaker
                        componentList={componentList}
                        setComponentList={setComponentList}
                        handleDragEnter={handleDragEnter}
                        handleDragLeave={handleDragLeave}
                        handleDragOver={handleDragOver}
                        handleDrop={handleDrop}
                        template={template}
                    />
                </Grid>
                <Grid item xs={2} sx={[lateralMenu, scrollbar]}>
                    <div className="components-editor">
                        <p>Aqui va el editor de componentes</p>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export { Webmaker };
