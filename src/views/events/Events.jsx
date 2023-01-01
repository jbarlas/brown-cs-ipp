import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function Events() {
  return (
    <div>
      <div id='subheading' align="center">
        <h2>Upcoming Events</h2>
      </div>
      <div id='cards' align="center">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('./temp_imgs/Deloitte_Logo.jpg')}
        title="Deloitte Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Deloitte Info Session
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Location:</b> CIT 458
          <br></br>
          <b>Time: </b>March 3rd 2023 12:30 - 14:00
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><b>Add</b></Button>
        <Button size="small"><b>Learn More</b></Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('./temp_imgs/Deloitte_Logo.jpg')}
        title="Deloitte Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Deloitte Info Session
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Location:</b> CIT 458
          <br></br>
          <b>Time: </b>March 3rd 2023 12:30 - 14:00
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><b>Add</b></Button>
        <Button size="small"><b>Learn More</b></Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345}}>
        <CardMedia
        sx={{ height: 140 }}
        image={require('./temp_imgs/Deloitte_Logo.jpg')}
        title="Deloitte Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Deloitte Info Session
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Location:</b> CIT 458
          <br></br>
          <b>Time: </b>March 3rd 2023 12:30 - 14:00
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><b>Add</b></Button>
        <Button size="small"><b>Learn More</b></Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('./temp_imgs/Deloitte_Logo.jpg')}
        title="Deloitte Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Deloitte Info Session
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Location:</b> CIT 458
          <br></br>
          <b>Time: </b>March 3rd 2023 12:30 - 14:00
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><b>Add</b></Button>
        <Button size="small"><b>Learn More</b></Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    </Box>
      <br></br>
      </div>
      <div id='subheading' align="center">
        <h2>IPP Events Calendar</h2>
      </div>
      <div id='gcal' align="center"><iframe src="https://calendar.google.com/calendar/embed?src=c_3b03e2f6ba6590d405d1ec9965101bfc583fb5719edbed3084ca8bed0898b9af%40group.calendar.google.com&ctz=America%2FNew_York" width="800" height="600" frameborder="0" scrolling="no"></iframe></div>
      
    </div>

    
  )
}
