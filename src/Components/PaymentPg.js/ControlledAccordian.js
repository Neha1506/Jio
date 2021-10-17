import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GooglePay from '../../Assets/GooglePay.png'
import Circle from '../../Assets/Circle.png'
import Grid from '@material-ui/core/Grid';

// Last 2 Buttons Are Put As Accordians

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(1),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        > 
        
   
           <Grid item xs={12} sm={12} xl={12}> 
          <img src={GooglePay} className="GooglePay" alt="GooglePay" height="20" width="20" position='center' />
           </Grid> 
           
          <Typography variant="h6" className={classes.heading} align='left'>Google Pay </Typography>
        
          

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Payment Details
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br />
    
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >

     
          <Grid item xs={12} sm={12} xl={12}>
          <img src={Circle} className="Circle" alt="Circle" height="20" width="20" />
          </Grid>
          
         
          <Typography variant="h6" className={classes.heading} align='left'> YourName@BankName</Typography>
          

          <Typography className={classes.secondaryHeading}>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Payment Details
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}
