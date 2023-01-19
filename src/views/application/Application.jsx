import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import CardMedia from '@mui/material/CardMedia';
import Switch from '@mui/material/Switch';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import "./Application.css";


export default function Application() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

  };
  return (
    <div>
    <div class='code-block' align="center" >
    <br></br>
    <br></br>
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
      '& > :not(style)': { m: 2, width: '30ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Appplication Code" variant="outlined" color="secondary"/>
    
  </Box>
  <Button variant="contained" color="success">
  Validate
</Button>
  <Typography variant="body2">
  <br></br>
    Don’t have a code yet? Please reach out to our partner relations staff at: brown-cs-ipp@brown.edu to be provided with one. In the mean time, feel free to browse our application below.
        </Typography>
      </CardContent>
    </Card>
    <br></br>
    <br></br>
    <br></br>
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
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Company Name"
          color="secondary"
          Company Name
        />
        <TextField
          id="outlined-textarea"
          label="Industry"
          color="secondary"
          Industry
        />
      </div>
      <div>
      <TextField
          id="standard-basic"
          label="Website"
          color="secondary"
          Website
        />
        <TextField
          id="filled-multiline-flexible"
          label="Size (Employees)"
          color="secondary"
          Employees
        />
      </div>
      
      <div class="formcontrol">
       <TextField
          id="filled-textarea"
          label="Office Locations"
          placeholder="Providence"
          color="secondary"
          Office Locations
        />
      {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" color="secondary">Business Type</FormLabel>
      <RadioGroup
        name="radio-buttons-group"
        
      >
        <FormControlLabel value="For Profit" control={<Radio color="secondary"/>} label="For Profit"  />
        <FormControlLabel value="Not For Profit" control={<Radio color="secondary"/>} label="Not For Profit" />
        <FormControlLabel value="Non-Profit" control={<Radio color="secondary"/>} label="Non-Profit" />
      </RadioGroup>
    </FormControl>
    {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
    
      </div>
      </Box>
      
      <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="filled-multiline-static"
          label="Mission Statement"
          color="secondary"
          multiline
          rows={4}
        />
      </Box>
      </div>
      <div>
        <Typography variant="h6">
          <b>Values</b>
        </Typography>
      </div>
      <div class="badges">
        <br></br>
      <CardMedia
      component="img"
      sx={{
        height: 100, objectFit: "contain"}}
        image={require('./temp_imgs/badges.png')}
    >
      </CardMedia>
      <br></br>
      <Box
      
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            DEI (Diversity, Equity, Inclusion)
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}> How does your company build an environment that fosters diversity, equity, and inclusion?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TextField
          id="filled-multiline-static"
          color="secondary"
          label="Response"
          multiline
          rows={4}
        />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Environmental Responsibility</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          How is your company working to protect the environment and address climate change?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TextField
          id="filled-multiline-static"
          color="secondary"
          label="Response"
          multiline
          rows={4}
        />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Social Impact
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          How does your company have/aim to have a positive social impact?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TextField
          id="filled-multiline-static"
          color="secondary"
          label="Response"
          multiline
          rows={4}
        />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Mentorship</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          How do opportunities with your company facilitate professional growth and mentorship?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TextField
          id="filled-multiline-static"
          color="secondary"
          label="Response"
          multiline
          rows={4}
        />
        </AccordionDetails>
      </Accordion>
       
      </Box>
      </div>
      <br></br>
      <div>
        <Typography variant="h6">
          <b>Current Openings</b>
        </Typography>

          <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Would you like to advertise current open positions through IPP?" />
        
      </div>

      <div>

      <Card variant="outlined" sx={{ minWidth: '60ch', maxWidth: '65ch' }}>
      <CardContent>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="filled-multiline-static"
          label="Job Title"
          color="secondary"
        />
      </Box>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="filled-multiline-static"
          label="Compensation Range"
          color="secondary"
        />
      </Box>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '28.79ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="filled-multiline-static"
          label="Start Date"
          color="secondary"
        />
        <TextField
          id="filled-multiline-static"
          label="End Date"
          color="secondary"
        />
      </Box>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="filled-multiline-static"
          label="Skills and Qualifications"
          color="secondary"
        />
      </Box>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="filled-multiline-static"
          label="Deadline"
          color="secondary"
        />
      </Box>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="filled-multiline-static"
          label="How to Apply"
          color="secondary"
        />
      </Box>
      <div>
      <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Remote Accessibility?" />
      </div>
      </CardContent>
    </Card>
</div>

      <div>
      <br></br>
        <Typography variant="h6">
          <b>Future Hiring Timeline</b>
        </Typography>
        
        <Typography variant="body2">
    Optionally include more information here so we can keep an eye out for future roles.
    </Typography>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="filled-multiline-static"
          label=""
          color="secondary"
          multiline
          rows={4}
        />
      </Box>
      <br></br>
      <Button variant="contained" color="secondary"><b>Submit</b></Button>
      <br></br>
      <br></br>
      
      </div>

    </div>
  </div>
  )
}
