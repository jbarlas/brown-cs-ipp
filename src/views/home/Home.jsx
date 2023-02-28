import React from 'react'
import Grid from '@mui/material/Grid';
import './Home.css'
// import "@fontsource/montserrat"

import BadgeSocial from '../../assets/ipp_badge_social.png'
import BadgeEquity from '../../assets/ipp_badge_equity.png'
import BadgeGrowth from '../../assets/ipp_badge_growth.png'
import BadgeEnviro from '../../assets/ipp_badge_enviro.png'
import HomeSplash from '../../assets/home_splash.png'

import Charlotte from '../../assets/Charlotte_Picture.jpg'
import Herbert from '../../assets/Herbert_Picture.jpg'
import Kendra from '../../assets/Kendra_Picture.jpg'
import ZeHua from '../../assets/Ze_Hua_Picture.jpg'
import Stephanie from '../../assets/Stephanie_Picture.jpg'
import Justin from '../../assets/ipp_badge_social.png'



export default function Home() {
  const StaffMembers =
    [
      { "name": "Charlotte", "title": "Team Lead", "picture": Charlotte },
      { "name": "Kendra", "title": "Students Communications", "picture": Kendra},
      { "name": "William", "title": "Outreach", "picture": ZeHua },
      { "name": "Justin", "title": "Outreach", "picture": Justin },
      { "name": "Herbert", "title": "Design", "picture": Herbert },
      { "name": "Stephanie", "title": "Design", "picture": Stephanie }
    ]

  return (
    <div>
      {/* TITLE */}
      <section style={{marginTop: "8rem"}}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div style={{display:"flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
            <h1 style={{marginBottom: "7px"}}>Brown University Industry Partners Program</h1>
            <div class="home_divider_div_h" style={{justifyContent: "left"}}>
              <p class="home_dividers_h" style={{width: "800px"}}></p>
            </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <img class="home_splash" src={HomeSplash} />
          </Grid>
          {/* WHAT WE DO */}
          <Grid item xs={6}>
            <div class="home_about_div">
              <h2 class="home_about_title">What We do</h2>
              <p class="home_about_text">
                The Industry Partners Program at Brown University's Department of Computer Science connects
                corporations and non-profit organizations with students looking for employment and offers
                opportunities to collaborate with faculty to learn about Brown's research.</p>
              <p class="home_about_text">Brown IPP seeks
                partners whose activities are aligned with the department's values and Brown's mission of
                education and research. Brown CS celebrates diversity and is committed to creating an
                inclusive environment for all our constituents. Membership in the IPP is by invitation.
                We welcome organizations whose business practices align with our expectation for equal
                opportunity and fair employment, as well as the responsible, transparent, and accessible use of technology.
              </p>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div class="home_divider_div">
              <p class="home_dividers">|</p>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div>
              <Grid container spacing={2} style={{marginTop: "1rem", marginLeft: "-4rem"}}>
                <Grid item xs={6}>
                  <div class="home_badge_div">
                    <img class="home_badge" src={BadgeEnviro} alt="social responsibility badge" />
                    <h4 class="home_badge_text">Environmental Responsibility</h4>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div class="home_badge_div">
                    <img class="home_badge" src={BadgeSocial} alt="equity and diversity badge" />
                    <h4 class="home_badge_text">Social Impact</h4>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div class="home_badge_div">
                    <img class="home_badge" src={BadgeEquity} alt="growth and mentorship badge" />
                    <h4 class="home_badge_text">Diversity, Equity and Inclusion</h4>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div class="home_badge_div">
                    <img class="home_badge" src={BadgeGrowth} alt="environmental responsibility badge" />
                    <h4 class="home_badge_text">Growth and Mentorship</h4>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </section>
      {/* OUR TEAM */}
      <section>
        <div class="home_divider_div_h" style={{justifyContent: "left"}}>
          <p class="home_dividers_h"></p>
        </div>
        <div style={{display: "flex", justifyContent: "space-evenly",textAlign: "center"}}>
          <h2 style={{width: "250px", marginTop: "10px"}}>Our Team</h2>
          <p class="home_staff_text">
            We are a team of full-time staff members and student ambassadors. As a branch of Brown's Computer
            Science Department, we drive new initiatives, facilitate industry outreach and connect our partners
            to the student body.
          </p>
          <div>
            <p class="home_staff_text"> For membership inquiries, email <br/> brown-cs-ipp@brown.edu. </p>
            <p class="home_staff_text"> Students: click here to subscribe to announcements regarding internships and job opportunities.</p>
          </div>
        </div>
        <Grid container spacing={2} columns={{ xs: 1, sm: 3, md: 6 }}>
          {StaffMembers.map((staff, index) => (
            <Grid item xs={12} sm={4} md={2} key={index}>
              <div class="home_staff_portrait_div">
                <img class="home_staff_portrait_picture" src={staff.picture} alt="pic" />
                <p class="home_staff_text" style={{marginBottom: "0"}}>{staff.name}</p>
                <p class="home_staff_text" style={{marginTop: "0"}}>{staff.title}</p>
              </div>
            </Grid>
          ))}
        </Grid>
        <div class="home_divider_div_h" style={{justifyContent: "right"}}>
          <p class="home_dividers_h"></p>
        </div>
      </section>
    </div>
  )
}