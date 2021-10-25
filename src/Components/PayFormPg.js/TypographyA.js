import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

let theme = createTheme();
theme = responsiveFontSizes(theme);

//Typography Put
export default function ResponsiveFontSizes() {
  return (
    <div>
      <ThemeProvider theme={theme}>




        <Box component="span" m={1}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Typography variant="h6" style={{ color: '#112360' }}>JioMart Ltd</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Typography variant="h9" style={{ color: '#294498' }}>JioMart - order @paytm</Typography>
            </Grid>



            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Typography variant="h7">You are Paying</Typography>
            </Grid>


            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} xl={12}>
                <Typography variant="h3">Rs. 190</Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} xl={12}>
                <Typography variant="h9" style={{ color: '#726C8F' }}>Rupess One Hundred Nintey Only</Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Typography variant="h3" ></Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} xl={12}>
                <Typography variant="h9" color="textSecondary"> Message from JioMart</Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Typography variant="h3"></Typography>
            </Grid>

          </Grid>


          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Typography variant="h5" color="textprimary"> 'JioMart Payment'</Typography>
            </Grid>

          </Grid>
        </Box>
      </ThemeProvider>




    </div>
  );
}
