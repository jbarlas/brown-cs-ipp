import React from "react";
import "./Tag.css";

export default function Tag(props) {
  return (
    <div class="partner_tag_div">
      <img class="partner_tag_icon" src={props.icon} alt={props.text}/>
      <p class="partner_tag_text">{props.text}</p>
    </div>
  );
}
