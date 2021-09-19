import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveFontSizes() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        
      <br/>

      <Typography variant="h9" >HDFC Bank XX2356</Typography>
      <br/>
      
      <br/>

        
        <br/>
      
        
        <Typography variant="h3" ></Typography>
        <br/>
        <br/>
        <br/>
        <br/>
        
        
        

        
      </ThemeProvider>
    </div>
  );
}
