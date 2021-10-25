import React from 'react';
import Container from '@material-ui/core/Container';
import DenseAppBar from '../Components/PaymentPg.js/DenseAppbar';
import ControlledAccordions from '../Components/PaymentPg.js/ControlledAccordian';
import Grid from '@material-ui/core/Grid';
import HorizontalNonLinearStepperWithError from '../Components/PaymentPg.js/Stepper';
import { Link, Router } from "react-router-dom";
import Button from '../Components/PaymentPg.js/Button.1';
import Button2 from '../Components/PaymentPg.js/Button.2';
import Button3 from '../Components/PaymentPg.js/Button.3';
import Button4 from '../Components/PaymentPg.js/Button.4';
import Button5 from '../Components/PaymentPg.js/Button.5';

export default function Payment() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} xl={12}>

            <DenseAppBar />
          </Grid>
          <Grid item xs={12} sm={12} xl={12}>
            <HorizontalNonLinearStepperWithError />
          </Grid>

          Wallet
          <Grid item xs={12} sm={12} xl={12} align=" center">
            {/* <Link to={process.env.PUBLIC_URL + '/PayForm'}> */}
            <Button />
            {/* </Link> */}
          </Grid>

          <Grid item xs={12} sm={12} xl={12} align=" center">
            {/* <Link to={process.env.PUBLIC_URL + '/PayForm'}> */}
            <Button2 />
            {/* </Link> */}
          </Grid>

          <Grid item xs={12} sm={12} xl={12} align=" center">
            {/* <Link to={process.env.PUBLIC_URL + '/PayForm'}> */}
            <Button3 />
            {/* </Link> */}
          </Grid>

          <Grid item xs={12} sm={12} xl={12} align=" center">
            {/* <Link to={process.env.PUBLIC_URL + '/PayForm'}> */}
            <Button4 />
            {/* </Link> */}
          </Grid>

          <Grid item xs={12} sm={12} xl={12} align=" center">
            {/* <Link to={process.env.PUBLIC_URL + '/PayForm'}> */}
            <Button5 />
            {/* </Link> */}
          </Grid>


          Other UPI
          <Grid item xs={12} sm={12} xl={12} align=" center">
            <Grid item xs={12} sm={12} xl={12}>
              <ControlledAccordions />

            </Grid>
          </Grid>

        </Grid>
      </Container>
    </React.Fragment>

  );
}