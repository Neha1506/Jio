import React from 'react';
import Container from '@material-ui/core/Container';
import SimplePaper from '../Components/PaymentPg.js/Paper';
import DenseAppBar from '../Components/PaymentPg.js/DenseAppbar';
import CustomizedTimeline from '../Components/PaymentPg.js/Timeline';
import ControlledAccordions from '../Components/PaymentPg.js/ControlledAccordian';









export default function Payment() {
  return (
    <React.Fragment>
      <Container fixed>

      <DenseAppBar />
      <CustomizedTimeline/>


        
        <SimplePaper />
        <ControlledAccordions/>
       
        
       
              






      </Container>
    </React.Fragment>

  );
}