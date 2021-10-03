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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} xl={12}>
        </Grid>
      </Grid>
      <ThemeProvider theme={theme}>

     
        <Box component="span" m={1}>
        
        <Grid container spacing={1} >
      <Grid item xs={12} sm={12} md={12} xl={12}align ='left'>
        <Typography variant="h9" >HDFC Bank XX2356</Typography>  <img src = {Upi} className= "image" alt= "Upi" align='right' />
        </Grid>
        </Grid>

        


        </Box>





      </ThemeProvider>
    </div>
  );
}
