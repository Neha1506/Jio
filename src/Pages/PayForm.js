import React from 'react';
import Container from '@material-ui/core/Container';
import DenseAppBar from '../Components/PaymentPg.js/DenseAppbar';
import SimpleCard from '../Components/PayFormPg.js/SimpleCard';
import Typography from '../Components/PayFormPg.js/TypographyA'
import ComplexGrid from '../Components/PayFormPg.js/ComplexGrid';
import J from './../Assets/J.png';



export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
        
            
            <DenseAppBar/>

            <img src={J} />


            <Typography/>
            <br/>

            <ComplexGrid/>
            

            <SimpleCard/>
            
            

            
            
            
            
            
           
            
        </Container>
    </React.Fragment>
    
  );
}