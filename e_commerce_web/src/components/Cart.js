import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";

import { NAV_LINKS } from "./TEXT";

const useStyles = makeStyles((theme) => ({
    cartContainer: {
        display: 'flex',
        flexGrow: '1',
        padding: '0',
        backgroundColor: '#FFF',

        width: '100%',
        color: '#000',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
}))

let Cart = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.cartContainer}>
            This is cart page
        </Grid>
    )
}

export default Cart;