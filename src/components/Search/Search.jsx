import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(2, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #5F64FF , #AE4EFF)',
    borderRadius: theme.shape.borderRadius,
    zIndex: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#373F41',
    border: '1.5px solid #737B7D',
    borderRadius: theme.shape.borderRadius,
    borderLeft: 'none',

    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '40ch',
            },
        },
    },
}));

const SearchAppBar = () => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Buscar..." inputProps={{ 'aria-label': 'search' }} />
        </Search>
    );
};

export default SearchAppBar;
