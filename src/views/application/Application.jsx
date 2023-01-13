import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { maxWidth } from '@mui/system';

export default function Application() {
  return (
    <div>
<div id='code-block' align="center">
      <br></br>
<Grid
justifyContent="center"
alignItems="center">
<Card variant="outlined" sx={{ minWidth: 450, maxWidth:460 }}>
      <CardContent>
        <Typography variant="body2" component="div">
        Thank you for your interest in applying to IPP! Before you continue with your application, please enter the Application Code provided by one of our IPP staff:
        </Typography>
        <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Appplication Code" variant="outlined" />
  </Box>
  <Typography variant="body2">
    Don’t have a code yet? Please reach out to our partner relations staff at: brown-cs-ipp@brown.edu to be provided with one. In the mean time, feel free to browse our application below.
        </Typography>
      </CardContent>
    </Card>
</Grid>
    </div>
    <br></br>
    <Divider />
    <br></br>
    <div id="form" align="center">
    <Typography variant="body2">
    To apply to become a partner, please provide the following details so we can best inform our students about your job opportunities.
    </Typography>
    <br></br>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Company Name"
          Company Name
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Industry"
          placeholder="Placeholder"
          Industry
        />
        <TextField
          id="outlined-multiline-static"
          label="Website"
          Website
          rows={4}
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Size (Employees)"
          Employees
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </div>
    </Box>
    </div>
    </div>
  )
}
