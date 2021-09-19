import React from 'react';
import Container from '@material-ui/core/Container';


import TextField from '@material-ui/core/TextField';
import DenseAppBar from '../Components/PaymentPg.js/DenseAppbar';
import ResponsiveFontSizes from '../Components/FormPin.js/TypographyB';
import SimpleCard from '../Components/FormPin.js/SimpleCardB';
import Responsive from '../Components/FormPin.js/TypoC';
import CustomizedSnackbars from '../Components/FormPin.js/Message';









export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
          <DenseAppBar/>
          <ResponsiveFontSizes/>
          <SimpleCard/>
          <Responsive/>
          
           
            
            <TextField/>
            <br/>
            <br/>

            <CustomizedSnackbars/>
            
           
            
           
            
            
            
            
            
            
            
           
            
        </Container>
    </React.Fragment>
    
  );
}