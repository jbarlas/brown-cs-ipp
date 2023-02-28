import React from 'react'
import Grid from '@mui/material/Grid';
import './Home.css'
import "@fontsource/montserrat"

import BadgeSocial from '../../assets/ipp_badge_social.png'
import BadgeEquity from '../../assets/ipp_badge_equity.png'
import BadgeGrowth from '../../assets/ipp_badge_growth.png'
import BadgeEnviro from '../../assets/ipp_badge_enviro.png'

export default function Home() {
  return (
    <div>
      {/* TITLE */}
      {/* maybe this top part should be a grid instead of sections? */}
      <section>
      <Grid container spacing={2}>
      <Grid item xs={6}>
        <h1>Brown University Industry Partners Program</h1>
        </Grid>
        <Grid item xs={6}>
        <img class="home_splash" src={BadgeSocial}/>
        </Grid>
      {/* WHAT WE DO */}
      <Grid item xs={6}>
        <div class="home_about_div">
          <h2>What We do</h2>
          <p>
          The Industry Partners Program at Brown University's Department of Computer Science connects
          corporations and non-profit organizations with students looking for employment and offers
          opportunities to collaborate with faculty to learn about Brown's research. Brown IPP seeks
          partners whose activities are aligned with the department's values and Brown's mission of
          education and research. Brown CS celebrates diversity and is committed to creating an
          inclusive environment for all our constituents. Membership in the IPP is by invitation.
          We welcome organizations whose business practices align with our expectation for equal
          opportunity and fair employment, as well as the responsible, transparent, and accessible use of technology.
          </p>
        </div>
        </Grid>
      <Grid item xs={6}>
        <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <div class="home_badge_div">
            <img class="home_badge" src={BadgeSocial} alt="social responsibility badge"/>
            <h4>Environmental Responsibility</h4>
          </div>
          </Grid>
          <Grid item xs={6}>
          <div class="home_badge_div">
            <img class="home_badge" src={BadgeEquity} alt="equity and diversity badge"/>
            <h4>Social Impact</h4>
          </div>
          </Grid>
          <Grid item xs={6}>
          <div class="home_badge_div">
            <img class="home_badge" src={BadgeGrowth} alt="growth and mentorship badge"/>
            <h4>Diversity, Equity and Inclusion</h4>
          </div>
          </Grid>
          <Grid item xs={6}>
          <div class="home_badge_div">
            <img class="home_badge" src={BadgeEnviro} alt= "environmental responsibility badge"/>
            <h4>Growth and Mentorship</h4>
          </div>
          </Grid>
          </Grid>
        </div>
        </Grid>
        </Grid>
      </section>
      {/* OUR TEAM */}
      <section>
        <h2>Our Team</h2>
        <p>
          We are a team of full-time staff members and student ambassadors. As a branch of Brown's Computer
          Science Department, we drive new initiatives, facilitate industry outreach and connect our partners
          to the student body. We are a team of full-time staff members and student ambassadors. As a branch
          of Brown's Computer Science Department, we drive new initiatives, facilitate industry outreach and
          connect our partners to the student body.
        </p>
        <p> For membership inquiries, email brown-cs-ipp@brown.edu. </p>
        <p> Students: click here to subscribe to announcements regarding internships and job opportunities.</p>
        <div>
          {/* use a tag and css styling instead of a component */}
          {/* img */}
          <p>name</p>
        </div>
      </section>
    </div>
  )
}
