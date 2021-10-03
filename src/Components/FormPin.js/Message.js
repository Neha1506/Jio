import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link, Router } from "react-router-dom";

//Alert Message to show money is being transfered
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>

      

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} xl={12}>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>

      <Alert severity="warning">You are transfering money from your account to JioMart Ltd.</Alert>

     
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={12} xl={12}>

      <Link to={process.env.PUBLIC_URL + '/PaymentSuccessful'}>
                    <Button variant="contained" color="primary" href="">
                      Pay
                    </Button>
                </Link>
                </Grid>
                </Grid>

    </div>
  );
}
