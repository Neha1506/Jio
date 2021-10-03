import React from 'react';
import Container from '@material-ui/core/Container';
import DenseAppBar from '../Components/PaymentPg.js/DenseAppbar';
import Wallet from './../Assets/Wallet.png';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


export default function Payment() {
  return (
    <React.Fragment>
      <Container fixed>



        <DenseAppBar />
        <Box component="span" m={1}>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} xl={12}>
              <img src={Wallet} />
            </Grid>

            <Grid item xs={12} sm={12} xl={12}>
              <Typography variant="h4" color="textPrimary" >PaymentSuccessful</Typography>
            </Grid>



            <Grid item xs={12} sm={12} xl={12}>
              <Typography variant="h8" color="textSecondary">Your amount has been paid</Typography>
            </Grid>



            <Grid item xs={12} sm={12} xl={12}>
              <Typography variant="h6" color="" >Order Number : XXXXX</Typography>
            </Grid>


          </Grid>
        </Box>







      </Container>
    </React.Fragment>

  );
}
