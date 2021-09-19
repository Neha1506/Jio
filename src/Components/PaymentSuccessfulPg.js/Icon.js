import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

//Extra Icon Component Inside Of image.

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function AccountBalanceWalletOutlinedIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsSize() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AccountBalanceWalletOutlinedIcon fontSize="small" />
      <AccountBalanceWalletOutlinedIcon/>
      <AccountBalanceWalletOutlinedIcon fontSize="large" />
      <AccountBalanceWalletOutlinedIcon style={{ fontSize: 40 }} />
    </div>
  );
}
