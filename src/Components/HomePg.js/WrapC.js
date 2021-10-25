import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

//THREE WRAPS PUT.

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: '#E4E4E4'
  },
}));

const message = ``;

export default function AutoGridNoWrapC() {
  const classes = useStyles();

  return (


    <Paper className={classes.paper}>

      <Grid container wrap="nowrap" spacing={2}>
        Collection With Best Offers
        <Grid item>

        </Grid>

        <Grid item xs>
          <Typography>{message}</Typography>

        </Grid>
      </Grid>

    </Paper>













  );
}
