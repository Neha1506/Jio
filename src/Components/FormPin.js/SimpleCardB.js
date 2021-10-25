import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Order details return on card
const useStyles = makeStyles({
    root: {
        minWidth: 300,
        backgroundColor: '#E3E3E3'
    },
    bullet: {
        display: 'inline-block',
        margin: '0.1px',
        transform: 'scale(0.3)',
    },
    title: {
        fontSize: 1500,
    },
    pos: {
        marginBottom: 500,

    },
});

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    return (
        <Card className={classes.root}>
            <CardContent>



            </CardContent>
            <CardActions>


                <Grid container spacing={5} align="left" >
                    <Grid item xs={12} sm={12} md={12} xl={12}>
                        <Typography variant="h6"> Sending Rs. 190  </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={1} align="right">
                    <Grid item xs={12} sm={12} md={12} xl={12}>
                        <Typography variant="h9" color="textSecondary">To JioMart Ltd</Typography>
                    </Grid>
                </Grid>


            </CardActions>
        </Card>














    );
}
