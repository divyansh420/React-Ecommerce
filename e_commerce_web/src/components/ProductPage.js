import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    productContainer: {
        display: 'flex',
        flexGrow: '1',
        padding: '0',
        backgroundColor: '#FFF',

        width: '100%',
        color: '#000',
        textAlign: 'center',
        alignItems: 'center',
    },
    productDialog: {
        display: 'flex',
        alignContent: 'center',
        height: '400px',
        justifyContent: 'space-between',
    },
    img: {
        height: '350px',
        width: '250px',
        border: '1px solid #333',
        borderRadius: '15px',
        padding: '2%'
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

let ProductPage = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.productContainer}>
            <Dialog
                open={props.open}
                keepMounted
                onClose={props.onClose}
                minWidth={500}
            >
                <DialogContent className={classes.productDialog}>
                    <Grid item>
                        <img src={props.product.imageURL} className={classes.img}/>       
                    </Grid>
                    <Grid item className={classes.text}>
                        <Typography>{props.product.brandName}</Typography>
                        <Typography>{props.product.category}</Typography>
                        <Typography>{props.product.name}</Typography>
                        <Typography>{props.product.companyAssured}</Typography>
                        <Typography>{props.product.rating}</Typography>
                        <Typography>{props.product.sellerName}</Typography>
                        <Typography>{props.product.isNewProduct}</Typography>
                        <Typography>{props.product.price}</Typography>
                        <Typography>{props.product.discount}</Typography>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>Buy</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default ProductPage;