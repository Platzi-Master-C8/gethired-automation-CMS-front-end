import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { ComponentsMenu } from '../../components/ComponentsMenu/ComponentsMenu';
import Header from '../../components/Header/Header';
import CanvasWebMaker from '../../components/CanvasWebMaker/CanvasWebMaker';

import components from '../../data/components';

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
    // const [dragging, setDragging] = useState(false);
    // const [component, setComponent] = useState(null);
    const [componentList, setComponentList] = useState([]);
    const [dragEndOverCanvas, setDragEndOverCanvas] = useState(false);
    const [dragItem, setDragItem] = useState(null);

    // const dragItem = useRef(null);

    const handleDragStart = (e, item) => {
        // console.log('drag start', item, e.target);
        // dragItem.current = e.target;
        setDragItem(item);
        // setDragging(true);
    };

    const handleDragEnd = () => {
        // console.log('drag end', item, e);
        if (dragEndOverCanvas) {
            // console.log('drag end over canvas');
        } else {
            // console.log('drag end NOT over canvas');
        }
        // setDragging(false);
        setDragEndOverCanvas(false);
        // dragItem.current = null;
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
        // console.log('drop', item, e);
        if (dragItem.type === 'container') {
            dragItem.canvasIndex = componentList.length;
            dragItem.props.onDrop = (e) => {
                console.log('drop', e.target);
                console.log(componentList);
            };
            // dragItem.props.onDrop = () => {console.log('drop over a container')};
            // dragItem.props.onDragEnter = () => {console.log('drag over a container')};
            // dragItem.props.onDragLeave = () => {console.log('drag leave a container')};
            console.log('container droped');
        }
        setComponentList([...componentList, dragItem]);
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
