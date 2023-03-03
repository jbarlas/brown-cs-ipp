// import './Partners.css';
// import React, {useState} from 'react'
// import CompanyCard from '../../components/partner-company-card/CompanyCard.jsx'
// import CompanyPage from '../../components/partner-company-card/CompanyPage.jsx'
// import FilterButton from '../../components/partner-company-card/FilterButton.jsx'

// import company_logo from '../../assets/ipp-logo.png';

// export default function Partners() {
//   const searchBar = () => {}
//   const [searchInput, setSearchInput] = useState("")
//   const [searchResponse, setSearchResponse] = useState("")
  
//   const handleChange = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value);
//     if (searchInput.length > 0) {
//       setSearchResponse("searching...");
//     } else {
//       setSearchResponse("not searching");
//     }
//   };

//   const SizeFilterItems = 
//     [
//       {"label":"Any", "descriptor":""},
//       {"label":"Tiny", "descriptor":"<10 Employees"},
//       {"label":"Small", "descriptor":"10-30 Employees"},
//       {"label":"Medium", "descriptor":"30-50 Employees"},
//       {"label":"Large", "descriptor":"50-100 Employees"},
//       {"label":"Very Large", "descriptor":"100+ Employees"}
//     ]

//   const TypeFilterItems = 
//     [
//       {"label":"Any", "descriptor":""},
//       {"label":"Tech", "descriptor":""}
//     ]

//   const ProfitFilterItems = 
//     [
//       {"label":"Any", "descriptor":""},
//       {"label":"NonProfit", "descriptor":""},
//       {"label":"Not For Profit", "descriptor":""},
//       {"label":"For Profit", "descriptor":""}
//     ]

//   const CompanyList = 
//     [
//       {
//         "name": "Duolingo",
//         // "logo": {company_logo},
//         "location": "PN, USA",
//         "size": "500+ Employees",
//         "description": "Duolingo is an American educational technology company which produces learning apps and provides language certification.",
//         "industry": "Education",
//         "profit": "For Profit"
//       },
//       {
//         "name": "Duolingo",
//         // "logo": {company_logo},
//         "location": "PN, USA",
//         "size": "500+ Employees",
//         "description": "Duolingo is an American educational technology company which produces learning apps and provides language certification.",
//         "industry": "Education",
//         "profit": "For Profit"
//       },
//       {
//         "name": "Duolingo",
//         // "logo": {company_logo},
//         "location": "PN, USA",
//         "size": "500+ Employees",
//         "description": "Duolingo is an American educational technology company which produces learning apps and provides language certification.",
//         "industry": "Education",
//         "profit": "For Profit"
//       },
//       {
//         "name": "Duolingo",
//         // "logo": {company_logo},
//         "location": "PN, USA",
//         "size": "500+ Employees",
//         "description": "Duolingo is an American educational technology company which produces learning apps and provides language certification.",
//         "industry": "Education",
//         "profit": "For Profit"
//       },
//       {
//         "name": "Duolingo",
//         // "logo": {company_logo},
//         "location": "PN, USA",
//         "size": "500+ Employees",
//         "description": "Duolingo is an American educational technology company which produces learning apps and provides language certification.",
//         "industry": "Education",
//         "profit": "For Profit"
//       },
//       {
//         "name": "Duolingo",
//         // "logo": {company_logo},
//         "location": "PN, USA",
//         "size": "500+ Employees",
//         "description": "Duolingo is an American educational technology company which produces learning apps and provides language certification.",
//         "industry": "Education",
//         "profit": "For Profit"
//       },
//       {
//         "name": "Duolingo",
//         // "logo": {company_logo},
//         "location": "PN, USA",
//         "size": "500+ Employees",
//         "description": "Duolingo is an American educational technology company which produces learning apps and provides language certification.",
//         "industry": "Education",
//         "profit": "For Profit"
//       }
//     ]
  
//   return (
//     <div>
//       {/* Search and Filter */}
//       <div class="partners_search_wrapper">
//         {/* Search Bar */}
//         <input
//         class="partners_search"
//         type="text"
//         placeholder="Search"
//         onChange={handleChange}
//         value={searchInput} />

//         {/* Filters */}
//         <div style={{display: 'flex'}}>
//           <p style = {{fontWeight: 'bold'}}>Filter By:</p>
//           <FilterButton text="Size" filterItems={SizeFilterItems}/>
//           <FilterButton text="Type" filterItems={TypeFilterItems}/>
//           <FilterButton text="Profit" filterItems={ProfitFilterItems}/>
//         </div>
//       </div>

//       <br/>

//       <div class="partner_cards_holder">
//         {/* Company Cards Small */}
//         <div class="partner_company_card_holder">
//           {CompanyList.map((item) => (
//             <CompanyCard props={item}/>
//           ))}
//         </div>
//         {/* Company Card Large */}
//         <div class="partner_company_card_large_holder">
//           <CompanyPage/>
//         </div>
//       </div>
    
//     <p>{searchResponse}</p>
    
//     </div>
    
//     )
//   }
  