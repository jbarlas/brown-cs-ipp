import React from "react";
import "./CompanyCard.css";

import company_logo from '../../assets/ipp-logo.png';
import hiring_icon from '../../assets/partner_icons/hiring_icon.png';
import profit_icon from '../../assets/partner_icons/class_icon.png';
import classification_icon from '../../assets/partner_icons/class_icon.png';

export default function CompanyCard() {
  return (
    <div class="partner_company_card">
      <img class="partner_hiring_icon" src={hiring_icon} alt="hiring icon"/>
      <img class="partner_logo" src={company_logo} alt="company logo"/>
      <div class="partner_company_card_info_wrapper">
        <h2>Company Name</h2>
        <h3>Location - Size</h3>
        <p>One liner about the company</p>
      </div>
      <div class="partner_tag_wrapper">
        <div class="partner_tag">
          <img class="partner_tag_icon"  src={classification_icon} alt="classification icon"/>
          <p>Classification</p>
        </div>
        <div class="partner_tag">
          <img class="partner_tag_icon" src={profit_icon} alt="profit icon"/>
          <p>Profit</p>
        </div>
      </div>
    </div>
  );
}
