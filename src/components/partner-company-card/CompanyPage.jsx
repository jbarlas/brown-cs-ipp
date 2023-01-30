import React from "react";
import {Grid} from '@mui/material';
import "./CompanyPage.css";

import company_logo from '../../assets/ipp-logo.png';
import hiring_icon from '../../assets/partner_icons/hiring_icon.png';
import expand_icon from '../../assets/partner_icons/expand_icon.png';

import profit_icon from '../../assets/partner_icons/hiring_icon.png';
import industry_icon from '../../assets/partner_icons/hiring_icon.png';
import location_icon from '../../assets/partner_icons/hiring_icon.png';
import size_icon from '../../assets/partner_icons/hiring_icon.png';

import Tag from './Tag.jsx';
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
            <p class="partner_mini_card_title">Company Name</p>
            <img class="partner_hiring_icon" src={hiring_icon} alt="hiring icon"/>
          </div>
          <div class="partner_info_text_div">
            {/* Tags */}
            <Grid container>
              <Grid item xs={4}>
                <Tag text="Location" icon={location_icon}/>
              </Grid>
              <Grid item xs={8}>
                <Tag text="Size" icon={size_icon}/>
              </Grid>
              <Grid item xs={4}>
                <Tag text="Industry" icon={industry_icon}/>
              </Grid>
              <Grid item xs={8}>
                <Tag text="Profit Model" icon={profit_icon}/>
              </Grid>
            </Grid>
            {/* Blurb */}
            <p style= {{width: '20rem'}}>Longer blurb talking about the company that they submit to us for use on this company page.
            Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
          </div>
        </div>
      </div>

      <br/>
      {/* Values */}
      <div>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <button style={{border: 'none', backgroundColor: 'white'}}><img style={{rotate: '90deg', width: '30px'}} src= {expand_icon} alt="back button"/></button>
          <div style={{display:'flex', alignItems: 'center'}}>
            <img class="partner_hiring_icon" src={hiring_icon} alt="value badge"/>
            <p class="partner_mini_card_title">Value Title</p>
          </div>
          <button style={{border: 'none', backgroundColor: 'white'}}><img style={{rotate: '-90deg', width: '30px'}} src= {expand_icon} alt="next button"/></button>
        </div>
        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Lorem ipsum dolor sit amet, consectet adipiscing elit. Lorem ipsum dolor sit amet, consectet adipiscing elit. Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
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
