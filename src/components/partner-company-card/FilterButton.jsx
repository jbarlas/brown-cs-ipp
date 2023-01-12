import React from "react";
import "./FilterButton.css";

import expand_icon from '../../assets/partner_icons/expand_icon.png';

export default function FilterButton(props) {
  return (
    <button class="partner_filter_button">
      <div class="partner_button_container">
        <p style={{margin: 0}}>{props.text}</p>
        <img class="partner_button_icon" src={expand_icon} alt= "placeholder"></img>
      </div>
    </button>
  );
}