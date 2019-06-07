import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import {makeStyles} from '@material-ui/styles';
import {Link} from "react-router-dom";
import logo from '../../images/logo.png';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        color: 'white',
        backgroundColor: '#7497ff',
    },
    img: {
        width: 40,
        height: 40,
    },
    logo: {
        display: 'flex',
        width: 220,
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Dancing Script',
    }
});


const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <div className={classes.logo}>
                    <Link to={'/'}>
                        <img src={logo} alt="img" className={classes.img}/>
                    </Link>
                    <Typography variant="h4" className={classes.title}>
                        Weather App
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>

    );
};

export default Header;
