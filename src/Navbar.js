import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { withStyles } from '@mui/styles';
import { ThemeContext } from './ThemeContext';

const styles = {
    flag: {
        width: '2.5rem',
        marginLeft: '0.5rem'
    }
}

function Navbar(props) {

    const things = useContext(ThemeContext);
    const { toggleTheme, isLightTheme } = things;

    const [colorTheme, setColorTheme] = useState(true);

    const handleChange = (event) => {
        setColorTheme(event.target.checked);
        toggleTheme();
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    return (
        <AppBar color={isLightTheme ? 'default' : 'primary'} position="static">
            <Container >
                <Toolbar disableGutters>
                    <img className={props.classes.flag} src='https://flagicons.lipis.dev/flags/4x3/ve.svg' alt='venezuela flag' />
                    <span className="fi fi-ve"></span>
                    <span className="fi fi-gr fis"></span>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, ml: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        App title
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={colorTheme}
                                        onChange={handleChange}
                                        aria-label="login switch"
                                    />
                                }
                                label={colorTheme ? 'Dark' : 'Light'}
                            />
                        </FormGroup>
                    </Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default withStyles(styles)(Navbar);
