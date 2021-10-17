import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import phonepe from '../../Assets/phonepe.png'
import { Grid } from '@material-ui/core';

// Payment Card

const useStyles = makeStyles({
    root: {
        height: 50,
        Width: 50,
    },
    media: {

    },
});

export default function Card2() {
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
                            <img src={phonepe} className="phonepe" alt="phonepe" height="20" width="20" />

                        </Grid>


                        <Typography  variant="h6" >
                            Phone pe
                        </Typography>


                        <Grid item xs={4}>

                        </Grid>




                    </Grid>

                </CardContent>
            </CardActionArea>

        </Card>
    );
}

