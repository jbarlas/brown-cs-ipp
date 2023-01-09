import React from 'react';
import './About.css';
import badgeEnviro from './images/badge-enviro.png'
import badgeEquity from './images/badge-equity.png'
import badgeGrowth from './images/badge-growth.png'
import badgeSocialImpact from './images/badge-social-impact.png'

export default function About() {
    return (
        <div className='about'>
            <div class='about-text'>
                <h2>
                    What is IPP?
                </h2>
                <p>
                    The Department of Computer Science at Brown University runs an industry partners program that offers corporations 
                    and non-profit organizations opportunities to collaborate with faculty, learn about Brown's research, and meet 
                    Brown students who are looking for employment. <br/>
                    The Department seeks partners whose activities are aligned with Brown’s mission of education and research. Brown 
                    CS celebrates diversity and is committed to creating an inclusive environment for all our constituents.  
                    Membership in the IPP is by invitation. We welcome organizations whose business practices align with our expectation 
                    for equal opportunity and fair employment, as well as the responsible, transparent, and accessible use of technology. 
                </p>
            </div>
            <div class='about-icons'>
                <img src={badgeEnviro} alt="environmentally responsible badge"/>
                <img src={badgeEquity} alt="social impact badge"/>
                <img src={badgeGrowth} alt="diversity equity and inclusion badge"/>
                <img src={badgeSocialImpact} alt="growth and mentorship badge"/>
            </div>
        </div>
    )
}