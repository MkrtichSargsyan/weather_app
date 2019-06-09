import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import {makeStyles} from '@material-ui/styles';
import {Link} from "react-router-dom";
import logo from '../../images/logo.png';

import skyImage from '../../images/sky.jpg'

const useStyles = makeStyles({
    root: {
        color: 'white',
        backgroundImage: `url(${skyImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    },
    img: {
        width: 40,
        height: 40,
    },
    logo: {
        display: 'flex',
        width: 220,
        justifyContent: 'space-between',

        '&:hover': {  transform: 'scale(1.1)'},

},


    title: {
        fontFamily: 'Dancing Script',
        color: 'white',
        border: 'none'

    }
});


const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                    <div className={classes.logo}>
                        <img src={logo} alt="img" className={classes.img}/>
                        <h1 className={classes.title}>Weather App</h1>
                    </div>
                </Link>
            </Toolbar>
        </AppBar>

    );
};

export default Header;
