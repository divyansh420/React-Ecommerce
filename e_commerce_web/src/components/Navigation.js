import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Grid, Toolbar, Typography } from "@material-ui/core";

import { NAV_LINKS } from "./TEXT";

const useStyles = makeStyles((theme) => ({
    navContainer: {
        display: 'flex',
        padding: '0',
        backgroundColor: '#FFF',

        width: '100%',
        color: '#000',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    Logo: {
        fontFamily: " 'Poppins', sans-serif ",
        fontSize: '22px',
        fontWeight: '800',
        color: '#ab231c', 
        padding: '1% 3%',
    },
    navLinksButton: {
        fontFamily: " 'Poppins', sans-serif ",
        fontSize: '20px',
        fontWeight: '600',
        textTransform: 'capitalize',
        wordSpacing: '2.5px',
        color: '#81450A', 
        padding: '0 5%',
    }
}))

let Navigation = () => {
    const classes = useStyles();

    return (
        <AppBar position='static'>
            <Toolbar  className={classes.navContainer} disableGutters>
                <Typography className={classes.Logo}>Shop App</Typography>
                <Grid item xs={4} className={classes.navLinksContainer} >
                    {
                        NAV_LINKS.map((link) => {
                            return (
                                <Button 
                                    key={link.id_Key}
                                    className={classes.navLinksButton}
                                    color="primary" 
                                    href={link.path}
                                >
                                    {link.text}
                                </Button>
                            )
                        })
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;