import React from "react";
import "./CompanyCard.css";

import hiring_icon from '../../assets/partner_icons/hiring_icon.png';
import profit_icon from '../../assets/partner_icons/class_icon.png';
import size_icon from '../../assets/partner_icons/hiring_icon.png';
import location_icon from '../../assets/partner_icons/hiring_icon.png';
import industry_icon from '../../assets/partner_icons/class_icon.png';

import company_logo from '../../assets/ipp-logo.png';

import Tag from './Tag.jsx';

export default function CompanyCard(props) {
  return (
    <div class="partner_company_card">
      {/* Company Logo */}
      <img class="partner_logo" src={hiring_icon} alt="company logo"/>

      {/* Info */}
      <div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <p class="partner_mini_card_title">Company Name</p>  <img class="partner_hiring_icon" src={hiring_icon} alt="hiring icon"/>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Tag text="Location" icon={location_icon} />
          <Tag text="Size" icon={size_icon} />
        </div>
        <p style={{margin: '0px'}}>One liner about the company</p>
      </div>

      {/* Tags */}
      <div style={{marginTop:'5px'}}>
        <div class='partner_tag'>
          <img class="partner_tag_icon" src={industry_icon} alt="tag icon"/>
          <p class="partner_tag_text">Industry</p>
        </div>
        <div style={{marginTop:'10px'}} class='partner_tag'>
          <img class="partner_tag_icon" src={profit_icon} alt="tag icon"/>
          <p class="partner_tag_text">Profit</p>
        </div>
      </div>
    </div>
  );
}
