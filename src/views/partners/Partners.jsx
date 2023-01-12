import './Partners.css';
import React, {useState} from 'react'
import CompanyCard from '../../components/partner-company-card/CompanyCard.jsx'
import FilterButton from '../../components/partner-company-card/FilterButton.jsx'

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
      {/* Search and Filter */}
      <div class="partners_search_wrapper">
        {/* Search Bar */}
        <input
        class="partners_search"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput} />

        {/* Filters */}
        <div style={{display: 'flex'}}>
          <p>Filter By:</p>
          <FilterButton text="Size"/>
          <FilterButton text="Type"/>
          <FilterButton text="Profit"/>
        </div>
      </div>

      <br/>

      {/* Company Cards Small */}
      <div class="partner_company_card_holder">
        <CompanyCard/>
      </div>
    
    <p>{searchResponse}</p>
    
    </div>
    
    )
  }
  