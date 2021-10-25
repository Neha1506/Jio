import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//Enter Pin

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Responsive() {
  return (
    <div>
      <ThemeProvider theme={theme}>

        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} xl={12}>
            <Typography variant="h9" color="textSecondary">'Enter ALL 4 UPI PIN'</Typography>
          </Grid>
        </Grid>




      </ThemeProvider>
    </div>
  );
}
