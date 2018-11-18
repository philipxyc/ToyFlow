import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function LikeForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        喜好信息
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="您希望的玩具类型" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="您希望的玩具材质" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="您希望的玩具价位" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default LikeForm;
