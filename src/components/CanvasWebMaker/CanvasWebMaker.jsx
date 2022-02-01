/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const renderComponent = (component) => {
    return React.createElement(
        component.HTMLtag,
        component.props,
        component.children.length !== 0
            ? component.children.map((child) => {
                  child.props.key = component.children.indexOf(child);
                  return renderComponent(child);
              })
            : component.content,
    );
};

const CanvasWebMaker = ({ handleDragEnter, handleDragLeave, handleDragOver, handleDrop, componentList }) => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                backgroundColor: '#E5E5E5',
                padding: '10px',
            }}
        >
            <Box
                sx={{
                    bgcolor: '#fff',
                    minHeight: '90vh',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                }}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {componentList.length === 0 ? null : (
                    <React.Fragment>
                        {componentList.map((component) => {
                            component.props.key = componentList.indexOf(component);
                            return renderComponent(component);
                        })}
                    </React.Fragment>
                )}
            </Box>
        </Container>
    );
};

export default CanvasWebMaker;
