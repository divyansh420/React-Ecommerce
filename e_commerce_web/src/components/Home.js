import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";

import product_lists from "../product_lists.json";
import ProductPage from "./ProductPage";

const useStyles = makeStyles((theme) => ({
    homeContainer: {
        display: 'flex',
        margin: '3% 6% 0 0',
        padding: '0 3%',
        
        width: '100%',
        color: '#000',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    imgContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems : 'center',
        height: '100%',
        margin: '2% 0'
    },
    img: {
        height: '200px',
        width: '200px',
        border: '1px solid #333',
        borderRadius: '15px',
        padding: '2%'
    },
    text: {
        display: 'flex',
        fontFamily: " 'Poppins', sans-serif ",
        fontSize: '16px',
        fontWeight: '600',
        textTransform: 'capitalize',
        wordSpacing: '2.5px',
        color: '#81450A', 
        padding: '1% 5%'
    }
}))

let Home = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({});

    const handleClickOpen = (item) => {
        setProduct(item)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Grid container className={classes.homeContainer}>
            {
                product_lists.map(item => {
                    return (
                        <Grid item md={4} key={item.productId} className={classes.imgContainer} >
                            <img src={item.imageURL} className={classes.img} onClick={() => handleClickOpen(item)} />
                            <Typography className={classes.text}>{item.brandName} - {item.category}</Typography>
                            <Typography className={classes.text}>Rs.{item.price}</Typography>
                        </Grid>
                    )
                })
            }
            <ProductPage open={open} product={product} onClose={handleClose}/>
        </Grid>
    )
}

export default Home;