import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
                
                

                
                <Typography variant="h3"> Sending Rs. 190  </Typography>
                
                <Typography variant="h9" color="textSecondary">To JioMart Ltd</Typography>
                
                

            </CardActions>
        </Card>
        
        
        











    );
}
 