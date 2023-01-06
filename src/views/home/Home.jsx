import React, { useState } from 'react';
import './Home.css';
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import memberData from "./member-data.json";

export default function Home() {
  const [memberList, setList] = useState(memberData)
  function updateMemberList(updatedList){
    setList([...updatedList])
  }
  return (
    <div className="home">
      <Header></Header>
      <About></About>

      <div className="team-header">
        <h2>Our Team</h2>
      </div>
      <div className="our-team">
        {memberList.map((member) => (<Team teamMember = {member}></Team>))}
      </div>
    </div>
  )
}
