import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import HDFC from '../../Assets/HDFC.png'
import { Link, Router } from "react-router-dom";
import Button from '@material-ui/core/Button';

//Check Pages On IPhone X View

const useStyles = makeStyles((theme) => ({


  root: {
    flexGrow: 1,
    color: '#f5f5f5'
  },

  Button: {
    color: '#ffffff',
  },

  paper: {
    padding: theme.spacing(8),

    margin: 'auto',
    maxWidth: 400,
    maxHeight: 163

  },


  img: {
    margin: 'auto',
    maxWidth: '10%',
    maxHeight: '10%',

  },
}));

export default function ComplexGrid() {
  const classes = useStyles();


  return (
    <div className={classes.root}>


      <Paper className={classes.paper}>

        <ButtonBase className={classes.image}>


        </ButtonBase>



        <img src={HDFC} className="image" alt="HDFC" height="60" width="45" align="left" />




        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} xl={12} align="center" >
            <Typography variant="body" color="textSecondary " >Payform</Typography>

            <Typography gutterBottom variant="subtitle1">
              HDFC Bank XX2356
            </Typography>
            <Typography variant="body2" gutterBottom>

            </Typography>
            <Typography variant="body" style={{ color: '#0ED4EA' }} align="center">
              Check Balance
            </Typography>
          </Grid>
        </Grid>


        <Button size="large" >

        </Button>
        <Grid container spacing={7} >
          <Grid item xs={12} sm={12} xl={12}>
            <Link to={process.env.PUBLIC_URL + '/FormPin'}>
              <Button variant="contained" style={{ background: '#04B5EB' }} >
                <Typography variant="h9" style={{ color: '#ffffff' }}> Pay </Typography>

              </Button>
            </Link>
          </Grid>
        </Grid>



      </Paper>
    </div>

  );
}
