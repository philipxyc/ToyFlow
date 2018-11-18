import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function ExtraForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        其他信息
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="过敏原" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="宝宝性格" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="timeDelta" label="收货时间间隔" fullWidth />
        </Grid>        
      </Grid>
    </React.Fragment>
  );
}

export default ExtraForm;
