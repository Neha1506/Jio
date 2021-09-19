import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Responsive() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <br/>

      <Typography variant="h9" color="textSecondary">'Enter ALL 4 UPI PIN'</Typography>
      <br/>
      
        

        
      </ThemeProvider>
    </div>
  );
}
