import React, {useState} from 'react'
import './Partners.css';

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
    <div class="partners-search-wrapper">
      <input
        class="partners-search"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput} />
    </div>
    
    <p>{searchResponse}</p>
    
    </div>
    
    )
  }
  