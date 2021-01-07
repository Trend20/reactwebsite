import React from 'react'
import './Team.css';

export default function Team() {
    return (
        <div className="team">
            <div className="team-heading">
                <h3>Team Members</h3>
                <h1>Meet Our Team</h1>
                <p>
                    This is the team that outlines and manages the work and activities
                    of our organization. We deliver quality services which ranks our consultancy a notch 
                    higher.
                </p>
            </div>

            <div className="team-members">
                <div className="member-details">
                    <img src="/img/team1.webp" alt="member1"/>
                    <h3>Lesix Mike</h3>
                    <p>Graphic Designer</p>
                </div>

                <div className="member-details">
                    <img src="/img/team2.webp" alt="member1"/>
                    <h3>Kevin Bowl</h3>
                    <p>UI Designer</p>
                </div>

                <div className="member-details">
                    <img src="/img/team3.webp" alt="member1"/>
                    <h3>George Don</h3>
                    <p>Product Manager</p>
                </div>

                <div className="member-details">
                    <img src="/img/team4.webp" alt="member1"/>
                    <h3>Moven Breddy</h3>
                    <p>CEO/FOUNDER</p>
                </div>
            </div>
            <button id="join">Join Us Now!</button>
        </div>
    )
}