import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

//Typography Put
export default function ResponsiveFontSizes() {
  return (
    <div>
      <ThemeProvider theme={theme}>

        <Typography variant="h9" color="textSecondary">JioMart Ltd</Typography>
        <br />
        <Typography variant="h9" color="textSecondary">JioMart - order @paytm</Typography>
        <br />
        <br />

        <Typography variant="h7">You are Paying</Typography>
        <Typography variant="h3">Rs. 190</Typography>
        <br />
        <Typography variant="h9" color="textSecondary">Rupess One Hundred Nintey Only</Typography>
        <br />
        <Typography variant="h3" ></Typography>
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h9" color="textSecondary"> Message from JioMart</Typography>
        <Typography variant="h3"></Typography>
        <br />

        <Typography variant="h5" color="textprimary"> 'JioMart Payment'</Typography>
      </ThemeProvider>
    </div>
  );
}
