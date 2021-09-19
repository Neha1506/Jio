import React from 'react';
import Container from '@material-ui/core/Container';
import DenseAppBar from '../Components/PaymentPg.js/DenseAppbar';
import Wallet from './../Assets/Wallet.png';
import Typography from '@material-ui/core/Typography';






export default function Payment() {
  return (
    <React.Fragment>
      <Container fixed>




        <DenseAppBar />
        
        <img src={Wallet} />
        <br/>
        <Typography variant="h4"color="textPrimary" >PaymentSuccessful</Typography> 
        <br/>
        <Typography variant="h8" color="textSecondary">Your amount has been paid</Typography> 
        <br/>
        <br/>
        <Typography variant="h6" >Order Number : XXXXX</Typography> 
        
        
 



      </Container>
    </React.Fragment>

  );
}
