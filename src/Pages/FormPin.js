import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import DenseAppBar from '../Components/PaymentPg.js/DenseAppbar';
import ResponsiveFontSizes from '../Components/FormPin.js/TypographyB';
import SimpleCard from '../Components/FormPin.js/SimpleCardB';
import Responsive from '../Components/FormPin.js/TypoC';
import CustomizedSnackbars from '../Components/FormPin.js/Message';
import Grid from '@material-ui/core/Grid';


export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
          <DenseAppBar/>
          
          <Grid container spacing={10}>
           <Grid item xs={12}sm={12}xl={12}>
          <ResponsiveFontSizes/>
          </Grid>
          </Grid>
          
          <Grid container spacing={10}>
           <Grid item xs={12}sm={12}xl={12}>
          <SimpleCard/>
          </Grid>
          </Grid>

          <Grid container spacing={10}>
           <Grid item xs={12}sm={12}xl={12}>
          <Responsive/>
          </Grid>
          </Grid> 
           
          <Grid container spacing={10}>
           <Grid item xs={12}sm={12}xl={12}> 
            <TextField/>
            </Grid>
            </Grid>
            
            
            <Grid container spacing={10}>
           <Grid item xs={12}sm={12}xl={12}>
            <CustomizedSnackbars/>
            </Grid>
            </Grid>
           
            
           
            
            
            
            
            
            
            
           
            
        </Container>
    </React.Fragment>
    
  );
}