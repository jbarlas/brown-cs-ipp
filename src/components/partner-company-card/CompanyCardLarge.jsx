import React from "react";
import "./CompanyCardLarge.css";

import company_logo from '../../assets/ipp-logo.png';
import hiring_icon from '../../assets/partner_icons/hiring_icon.png';
import profit_icon from '../../assets/partner_icons/class_icon.png';
import industry_icon from '../../assets/partner_icons/class_icon.png';

export default function CompanyCard() {
  return (
    <div class="partner_company_card_large">
      {/* Company Logo */}
      <img class="partner_logo" src={company_logo} alt="company logo"/>

      {/* Info */}
      <div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <p class="partner_mini_card_title">Company Name</p>  <img class="partner_hiring_icon" src={hiring_icon} alt="hiring icon"/>
        </div>
        <p class="partner_mini_card_subtitle">Location - Size</p>
        <p>One liner about the company</p>
      </div>
    </div>
  );
}
