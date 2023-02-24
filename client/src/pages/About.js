import React from 'react';
import TeamMember from '../components/TeamMember';
import './AboutPage.css';
import Atharva from '../assets/staffone.jpg'
import Stephno from '../assets/stafftwo.jpg'
import Pankaj from '../assets/staffthree.jpg'
import NavBar from '../components/NavBar';


const About = () =>{
    return(
        <>
        <NavBar/>
        <div className="about-page">
      <h1>About Us</h1>
      <div className="team-members">
        <TeamMember
          name="Atharva Amberkar"
          title="Front-end Developer"
          photo={Atharva}
        />
        <TeamMember
          name="Aastle Stephno"
          title="Back-end Developer"
          photo={Stephno}
        />
        <TeamMember
          name="Pankaj Sirari"
          title="Front-end Developer"
          photo={Pankaj}
        />
      </div>
    </div>
        </>
    )
}
export default About;