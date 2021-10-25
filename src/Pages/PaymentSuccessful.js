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

        


      <Grid container spacing={8}>
          <Grid item xs={12} sm={12} xl={12}>
            <DenseAppBar />
          </Grid>
         
        
        

        <Grid item xs={12} sm={12} xl={12}>
        <img src={Wallet} />
          </Grid>
          </Grid>
          <Box component="span" m={1}>

            <Grid container spacing={3}>
            <Grid item xs={12} sm={12} xl={12}>
              <Typography variant="h4" style={{color:'#707070'}}  >PaymentSuccessful</Typography>
             
            </Grid>
            
            
            

         
            <Grid item xs={12} sm={12} xl={12}>
              <Typography variant="h9" color="textSecondary">Your amount has been paid</Typography>
            </Grid>

           
           
            
           

            <Grid item xs={12} sm={12} xl={12}>
              <Typography variant="h6" style={{color:'#00C7C9'}} >Order Number : XXXXX</Typography>
            </Grid>
           

          </Grid>
        </Box>







      </Container>
    </React.Fragment>

  );
}
