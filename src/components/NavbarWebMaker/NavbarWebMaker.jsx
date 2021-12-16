import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import { styled } from '@mui/material/styles';

const ListNavBarWM = styled(List)`
    display: flex;
    align-items: center;
    margin-right: 2rem;
`;

const ListItemIconNavBarWM = styled(ListItemIcon)`
    color: #373f41;
`;

const NavbarWebMaker = () => {
    return (
        <ListNavBarWM>
            <ListItem
                sx={{
                    paddingRight: '0px',
                }}
            >
                <ListItemIconNavBarWM>
                    <ArrowBackOutlinedIcon />
                </ListItemIconNavBarWM>
                <ListItemIconNavBarWM>
                    <ArrowForwardOutlinedIcon />
                </ListItemIconNavBarWM>
            </ListItem>
            <ListItem
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '0px',
                    paddingLeft: '0px',
                }}
            >
                <ListItemIconNavBarWM
                    sx={{
                        placeContent: 'center',
                    }}
                >
                    <PhoneAndroidOutlinedIcon />
                    <DesktopMacOutlinedIcon />
                </ListItemIconNavBarWM>
                <ListItemText
                    sx={{
                        color: '#373f41',
                    }}
                    primary="Preview"
                />
            </ListItem>
            <ListItem>
                <ListItemButton
                    sx={{
                        backgroundColor: '#555bff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0.3rem 0.5rem',
                        borderRadius: '0.5rem',
                        transition: '0.3s',

                        '&:hover': {
                            backgroundColor: '#373f41',
                        },
                    }}
                >
                    <ListItemText primary="Publicar" />
                    <WebOutlinedIcon
                        sx={{
                            marginLeft: '0.2rem',
                            fontSize: '2.1rem',
                        }}
                    />
                </ListItemButton>
            </ListItem>
        </ListNavBarWM>
    );
};

export default NavbarWebMaker;
