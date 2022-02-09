import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import { withStyles } from '@mui/styles';

const styles = {
    paper: {
        width: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem auto'
    }
}

function Login(props) {
    const { classes } = props;

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const languages = [
        {
            value: 'Spanish',
            label: 'Spanish',
        },
        {
            value: 'English',
            label: 'English',
        },
        {
            value: 'French',
            label: 'French',
        },
    ];

    const [language, setLanguage] = useState('English');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Paper className={classes.paper}>
            <Box style={{ textAlign: 'center', marginTop: '3rem' }} sx={{ '& > :not(style)': { m: 1 } }}>
                <div>
                    <FormControl sx={{ m: 1, width: '25ch' }}>
                        <TextField
                            size="small"
                            id="outlined-select-language"
                            select
                            label="Select"
                            value={language}
                            onChange={handleChange}
                            helperText="Please select your Language"
                        >
                            {languages.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <TextField
                            id="outlined-search"
                            label="Username"
                            type="text"
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChangePassword('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <div>
                    <Button variant="outlined">Login</Button>
                </div>

            </Box>
        </Paper>
    )
}

export default withStyles(styles)(Login);
