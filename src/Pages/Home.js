import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/HomePg.js/Button2';
import SwipeableTextMobileStepper from '../Components/HomePg.js/Carousel';
import PrimarySearchAppBar from '../Components/HomePg.js/AppSearchBar';
import AutoGridNoWrap from '../Components/HomePg.js/Wrap';
import SingleLineImageList from '../Components/ImageList';







export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>

          <PrimarySearchAppBar/>
            
            <ContainedButtons/>
            <SwipeableTextMobileStepper/>
            <SwipeableTextMobileStepper/>
            <SwipeableTextMobileStepper/>
            <AutoGridNoWrap/>
            <SingleLineImageList/>
            <AutoGridNoWrap/>
            <SwipeableTextMobileStepper/>
            <AutoGridNoWrap/>
            
            
            
            
            
            
            
            
            
           
            
        </Container>
         
    </React.Fragment>
    
  );
}