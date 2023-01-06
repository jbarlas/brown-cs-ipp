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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis semper erat. Integer vel porta eros, 
                    ut egestas ex. Nullam et hendrerit dui, id tincidunt felis. Fusce turpis nisl, auctor et pellentesque et, luctus 
                    at enim. Duis ac euismod urna. Aenean placerat dignissim viverra. Proin a nisi gravida, posuere justo vitae, 
                    rutrum est. Quisque eu arcu eget nulla bibendum blandit sit amet vel neque. Sed eu justo ac mauris fermentum 
                    rutrum eget ut elit. Vestibulum in volutpat quam, ut pellentesque enim. Donec euismod commodo elit, nec lobortis 
                    libero congue a. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
                    sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
                    aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit 
                    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
                    velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
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