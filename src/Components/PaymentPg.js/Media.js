import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paytm from '../../Assets/Paytm.png'
import { Grid } from '@material-ui/core';
import { Link, Router } from "react-router-dom";

// Payment Card


const useStyles = makeStyles({
    root: {
        height: 50,
        Width: 50,
    },
    media: {

    },
});

export default function S1Ep1Card() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <CardActionArea>
                <CardMedia
                    className={classes.media}

                />
                <CardContent>

                    <Grid container spacing={0}>
                    

                        <Grid item xs={6}>
                            <img src={Paytm} className="Paytm" alt="Paytm" height="20" width="20" />

                        </Grid>
                        

                        <Link to={process.env.PUBLIC_URL + '/PayForm'}>
                        <Typography variant="h6" style={{color:'#000000'}} >
                            Paytm
                        </Typography>


                        <Grid item xs={2}>

                        </Grid>
                        </Link> 




                    </Grid>

                </CardContent>
            </CardActionArea>

        </Card>
    );
}

