import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Upi from '../../Assets/Upi.png'

// Typography

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveFontSizes() {
  return (
    <div>
     
      <ThemeProvider theme={theme}>

     
        <Box component="span" m={1}>
        
        
      <Grid item xs={12} sm={12} md={12} xl={12}align ='left'>
        <Typography variant="h7" >HDFC Bank </Typography>  <img src = {Upi} className= "image" alt= "Upi" align='right' />
        </Grid>
       

      <Grid item xs={12} sm={12} md={12} xl={12}align ='left'>
        <Typography variant="h7" > XX2356</Typography>
        </Grid>
        


        </Box>





      </ThemeProvider>
    </div>
  );
}
