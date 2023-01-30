import React from "react";
import "./JobCard.css";

import hiring_icon from '../../assets/partner_icons/hiring_icon.png';

export default function JobCard() {
  return (
    <div class="partner_jobcard">
      <div class="partner_jobcard_header">
        {/* Job or Internship Icon */}
        <img class="partner_jobcard_icon" src={hiring_icon} alt="Job or Internship Icon"/>
        <div style= {{paddingLeft: '1rem'}}>
          <p class="parter_jobcard_title">Title</p>
          <p class="parter_jobcard_subtitle">Subtitle</p>
        </div>
      </div>
      <p class="partner_jobcard_blurb"> A small blurb about the job or internship detailing
      anything the company.  A small blurb about the job or internship detailing anything
      the company wanted to include. wanted to include. </p>
      <div style = {{display: 'flex', justifyContent: 'space-between'}}>
        <p class="parter_jobcard_subtitle">Pay Range</p>
        <button class="partner_jobcard_button">ENGAGE</button>
      </div>
    </div>
  );
}
