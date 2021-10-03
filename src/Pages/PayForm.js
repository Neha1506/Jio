import React from 'react';
import Container from '@material-ui/core/Container';
import DenseAppBar from '../Components/PaymentPg.js/DenseAppbar';
import Typography from '../Components/PayFormPg.js/TypographyA'
import ComplexGrid from '../Components/PayFormPg.js/ComplexGrid';
import logo from './../Assets/logo.png';
import Grid from '@material-ui/core/Grid';





export default function Home() {
  return (
    <React.Fragment>
      <Container fixed>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} xl={12}>
            <DenseAppBar />
          </Grid>


          <Grid item xs={12} sm={12} xl={12}>
            <img src={logo} />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} xl={12}>
          <Typography />
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} xl={12}>
            <ComplexGrid />
          </Grid>

        </Grid>










      </Container>
    </React.Fragment>

  );
}