import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 0.5,
    height: 0.5,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>

            </ButtonBase>

          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>

                <Typography variant="body2" color="textSecondary">Payform</Typography>

                <Typography gutterBottom variant="subtitle1">
                  HDFC Bank XX2356
                </Typography>
                <Typography variant="body2" gutterBottom>

                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Check Balance
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>

                </Typography>
              </Grid>
            </Grid>
            <Grid item>

            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
