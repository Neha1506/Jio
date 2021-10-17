import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/HomePg.js/Button2';
import SwipeableTextMobileStepper from '../Components/HomePg.js/Carousel';
import PrimarySearchAppBar from '../Components/HomePg.js/AppSearchBar';
import AutoGridNoWrap from '../Components/HomePg.js/Wrap';
import SingleLineImageList from '../Components/ImageList';
import AutoGridNoWrapB from '../Components/HomePg.js/WrapB';
import AutoGridNoWrapC from '../Components/HomePg.js/WrapC';
import Carousel2 from '../Components/HomePg.js/Carousel2';
import Carousel3 from '../Components/HomePg.js/Carousel3';
import Carousel4 from '../Components/HomePg.js/Carousel4';
import Grid from '@material-ui/core/Grid';
import CenteredGrid from '../Components/HomePg.js/FooterGrid';
import SearchAppBar from '../Components/HomePg.js/Search';
import Buttons from '../Components/HomePg.js/icons';





export default function Home() {
  return (
    <React.Fragment>
      <Container fixed>

        <SearchAppBar/>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} xl={12}>
            <Buttons />
          </Grid>
        </Grid>



        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} xl={12}>
            <Carousel2 />
          </Grid>
        </Grid>

        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} xl={12}>
            <Carousel3 />
          </Grid>
        </Grid>

        <AutoGridNoWrap />
        <SingleLineImageList />
        <AutoGridNoWrapB />

        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} xl={12}>
            <Carousel4 />
          </Grid>
        </Grid>
        <AutoGridNoWrapC />

        <CenteredGrid />










      </Container>

    </React.Fragment>

  );
}