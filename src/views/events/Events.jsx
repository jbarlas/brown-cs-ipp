import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import AspectRatio from '@mui/joy/AspectRatio';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


export default function Events() {
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <div id='subheading' align="center">
        <h2>Upcoming Events</h2>
      </div>
      <div id='cards' align="center">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}
      justifyContent="center"
      alignItems="center">
        <Grid item xs={"3"}>
        <Card sx={{ maxWidth: 365 }}>
        <CardMedia
        component="img"
        sx={{height: 140, objectFit: "contain"}}
        image={require('./temp_imgs/duolingo_logo.png')}
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
      <Button onClick={handleClick}>Add to Calendar</Button>
        <Snackbar
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
          message="Event Added! See you soon!"
          action={action}
        />
        <Button size="small" onClick={handleClickOpen}><b>Learn More</b></Button>
        <BootstrapDialog
        onClose={handleClose2}
        aria-labelledby="customized-dialog-title"
        open={open2}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose2}>
          Deloitte Event Information
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose2}>
            View Open Positions
          </Button>
        </DialogActions>
      </BootstrapDialog>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      component="img"
      sx={{height: 140, objectFit: "contain"}}
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
      <Button onClick={handleClick}>Add to Calendar</Button>
        <Snackbar
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
          message="Event Added! See you soon!"
          action={action}
        />
        <Button size="small"><b>Learn More</b></Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345}}>
        <CardMedia
        component="img"
        sx={{height: 140, objectFit: "contain"}}
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
      <Button onClick={handleClick}>Add to Calendar</Button>
        <Snackbar
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
          message="Event Added! See you soon!"
          action={action}
        />
        <Button size="small"><b>Learn More</b></Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{height: 140, objectFit: "contain"}}
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
      <Button onClick={handleClick}>Add to Calendar</Button>
        <Snackbar
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
          message="Event Added! See you soon!"
          action={action}
        />
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
      <div id='gcal' align="center"><iframe src="https://calendar.google.com/calendar/embed?src=c_fd7cdd4a776df9bc604b0cb9971348a49bd1a40ff03543ba97718a16a81a4c86%40group.calendar.google.com&ctz=America%2FNew_York" width="800" height="600" frameborder="0" scrolling="no"></iframe></div>
      
    </div>

    //GCAL APIKEY  
    //AIzaSyCjUHYGVSyML1lCpnIeNDribmgF5RD4LA0
  )
}
