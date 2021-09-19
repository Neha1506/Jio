import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(90),
      height: theme.spacing(7),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>Wallet
    
    <Button variant="outlined">Paytm</Button>
    <Button variant="outlined">Phone pe</Button>
    <Button variant="outlined">JioMoney</Button>
    <Button variant="outlined">Mobikwik</Button>
    <Button variant="outlined">FreeCharge</Button>
          
      
    
      Other UPI
      
      
      
    </div>
  );
}
