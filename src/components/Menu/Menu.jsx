import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const TooltipMenu = styled(Tooltip)`
    @media (min-width: 600px) {
        display: none;
    }
`;

const MenuMobile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <TooltipMenu title="menu" sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}>
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <MenuIcon sx={{ color: '#373F41' }} />
                </IconButton>
            </TooltipMenu>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <EmailOutlinedIcon sx={{ marginRight: '10px' }} />
                    <Typography>Messages</Typography>
                </MenuItem>
                <MenuItem>
                    <NotificationsNoneOutlinedIcon sx={{ marginRight: '10px' }} />
                    <Typography>Notifications</Typography>
                </MenuItem>
                <MenuItem>
                    <GroupsOutlinedIcon sx={{ marginRight: '10px' }} />
                    <Typography>Forum</Typography>
                </MenuItem>
                <MenuItem>
                    <BusinessCenterOutlinedIcon sx={{ marginRight: '10px' }} />
                    <Typography>Jobs</Typography>
                </MenuItem>
                <MenuItem>
                    <ArticleOutlinedIcon sx={{ marginRight: '10px' }} />
                    <Typography>Blogpost</Typography>
                </MenuItem>
                <MenuItem>
                    <WebOutlinedIcon sx={{ marginRight: '10px' }} />
                    <Typography>My Website</Typography>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default MenuMobile;
