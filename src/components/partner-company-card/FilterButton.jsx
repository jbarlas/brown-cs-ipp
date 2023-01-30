import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button'
import "./FilterButton.css";

import expand_icon from '../../assets/partner_icons/expand_icon.png';

export default function FilterButton(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Button class="partner_filter_button"  aria-describedby={id} variant="contained" onClick={handleClick}>
      <div class="partner_button_container">
        <p style={{margin: 0}}>{props.text}</p>
        <img class="partner_button_icon" src={expand_icon} alt= "placeholder"></img>
      </div>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
      <div class="partner_filter_menu">
        <form>
          {props.filterItems?.map((item) => (
            <div>
              <input type="radio" id={item.label} name={props.text} value={item.label}/>
              <label style={{fontWeight:'bold'}} for="html">{item.label}</label>
              <p style={{color:'gray'}}>{item.descriptor}</p><br/>
            </div>
          ))}
        </form>
      </div>
      </Popover>
    </div>
  );
}