import './Partners.css';
import React, {useState} from 'react'
import CompanyCard from '../../components/partner-company-card/CompanyCard.jsx'

import expand_icon from '../../assets/partner_icons/expand_icon.png';
import search_icon from '../../assets/partner_icons/search_icon.png';

export default function Partners() {
  const searchBar = () => {}
  const [searchInput, setSearchInput] = useState("")
  const [searchResponse, setSearchResponse] = useState("")
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      setSearchResponse("searching...");
    } else {
      setSearchResponse("not searching");
    }
  };
  
  return (
    <div>
      <div class="partners_search_wrapper">
        <input
        class="partners_search"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput} />
    
        <button class="partner_filter_button">
          <div>
          Filter by Size
          <img class="partner_icon" src={expand_icon} alt= "placeholder"></img>
          </div>
        </button>

        <button class="partner_filter_button">
          <div>
          Filter by Type
          <img class="partner_icon" src={expand_icon} alt= "placeholder"></img>
          </div>
        </button>

        <button class="partner_filter_button">
          <div>
          Filter by Profit
          <img class="partner_icon" src={expand_icon} alt= "placeholder"></img>
          </div>
        </button>
      </div>

      <br/>

      <div class="partner_company_card_holder">
        <CompanyCard/>
      </div>
    
    <p>{searchResponse}</p>
    
    </div>
    
    )
  }
  