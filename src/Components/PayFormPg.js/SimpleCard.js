import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

//Pay Button Put Inside The Card
const useStyles = makeStyles({
    root: {
        minWidth: 300,
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

                <Button size="large">


                </Button>

                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} xl={12}>
                        <Link to={process.env.PUBLIC_URL + '/FormPin'}>
                            <Button variant="contained" color="primary" href="">
                                Pay
                            </Button>
                        </Link>
                    </Grid>
                </Grid>







            </CardActions>
        </Card>











    );
}
