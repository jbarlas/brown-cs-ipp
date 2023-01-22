import React from "react";
import "./CompanyCardLarge.css";

import company_logo from '../../assets/ipp-logo.png';
import hiring_icon from '../../assets/partner_icons/hiring_icon.png';
import profit_icon from '../../assets/partner_icons/class_icon.png';
import industry_icon from '../../assets/partner_icons/class_icon.png';

import JobCard from "./JobCard.jsx";

export default function CompanyCard() {
  return (
    <div class="partner_company_card_large">
      <div style={{display: "flex", justifyContent:'space-around'}}>
        {/* Company Logo */}
        <img class="partner_logo_large" src={company_logo} alt="company logo"/>

        {/* Info */}
        <div>
          {/* Name */}
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p class="partner_mini_card_title">Company Name</p>  <img class="partner_hiring_icon" src={hiring_icon} alt="hiring icon"/>
          </div>
          <div class="partner_info_text_div">
            {/* Tags */}
            <div class="partner_tag_div">
              <img class="partner_hiring_icon" src={hiring_icon} alt="location icon"/>
              <p class="partner_mini_card_subtitle">Location</p>
              <img class="partner_hiring_icon" src={hiring_icon} alt="location icon"/>
              <p class="partner_mini_card_subtitle">Size</p>
            </div>
            <p style= {{width: '20rem'}}>Longer blurb talking about the company that they submit to us for use on this company page.
            Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <button>Arrow Left</button>
          <div style={{display:'flex', alignItems: 'center'}}>
            <img class="partner_hiring_icon" src={hiring_icon} alt="value badge"/>
            <p>Value Title</p>
          </div>
          <button>Arrow Right</button>
        </div>
        <p>Value Text Blurb</p>
      </div>

      {/* Hiring */}
      <h2>Hiring</h2>
      <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
        <JobCard/>
        <JobCard/>
        <JobCard/>
      </div>
    </div>
  );
}
