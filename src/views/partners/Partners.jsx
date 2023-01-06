import React, {useState} from 'react'
import './Partners.css';

import see_more_icon from '../../assets/triangle_icon.png';

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
          <img class="partner_filter_button_icon" src={see_more_icon} alt= "placeholder"></img>
          </div>
        </button>

        <button class="partner_filter_button">
          <div>
          Filter by Type
          <img class="partner_filter_button_icon" src={see_more_icon} alt= "placeholder"></img>
          </div>
        </button>

        <button class="partner_filter_button">
          <div>
          Filter by Profit
          <img class="partner_filter_button_icon" src={see_more_icon} alt= "placeholder"></img>
          </div>
        </button>
      </div>
    
    <p>{searchResponse}</p>
    
    </div>
    
    )
  }
  