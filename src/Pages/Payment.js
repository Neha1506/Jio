import React from 'react';
import Container from '@material-ui/core/Container';
import DenseAppBar from '../Components/PaymentPg.js/DenseAppbar';
import ControlledAccordions from '../Components/PaymentPg.js/ControlledAccordian';
import Grid from '@material-ui/core/Grid';
import HorizontalNonLinearStepperWithError from '../Components/PaymentPg.js/Stepper';
import { Link, Router } from "react-router-dom";
import S1Ep1Card from '../Components/PaymentPg.js/Media';
import Card2 from '../Components/PaymentPg.js/Media.2';
import Card3 from '../Components/PaymentPg.js/Media.3';
import Card4 from '../Components/PaymentPg.js/Media.4';
import Card5 from '../Components/PaymentPg.js/Media.5';

export default function Payment() {
  return (
    <React.Fragment>
      <Container fixed>
      <Grid container spacing={3}>
      <Grid item xs={12}sm={12}xl={12}> 

      <DenseAppBar />
      </Grid> 
      <Grid item xs={12}sm={12}xl={12}> 
      <HorizontalNonLinearStepperWithError/>
      </Grid>

      Wallet  
      <Grid item xs={12}sm={12}xl={12} align =" center">
      <Link to={process.env.PUBLIC_URL + '/PayForm'}>
      <S1Ep1Card/>
      </Link>
      </Grid>

      <Grid item xs={12}sm={12}xl={12}  align =" center">
      <Link to={process.env.PUBLIC_URL + '/PayForm'}>
       <Card2/>
        </Link>
         </Grid>

         <Grid item xs={12}sm={12}xl={12} align =" center">
      <Link to={process.env.PUBLIC_URL + '/PayForm'}>
       <Card3/>
        </Link>
         </Grid>
         
         <Grid item xs={12}sm={12}xl={12} align =" center">
      <Link to={process.env.PUBLIC_URL + '/PayForm'}>
       <Card4/>
        </Link>
         </Grid>
         
         <Grid item xs={12}sm={12}xl={12} align =" center">
      <Link to={process.env.PUBLIC_URL + '/PayForm'}>
       <Card5/>
        </Link>
         </Grid>
         

       Other UPI
         <Grid item xs={12}sm={12}xl={12}>
        <ControlledAccordions/>
        </Grid>
    
        </Grid> 
      </Container>
    </React.Fragment>

  );
}