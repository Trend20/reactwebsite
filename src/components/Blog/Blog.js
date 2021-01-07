import React from 'react'
import './Blog.css';

export default function Blog() {
    return (
        <div className="blog">
             <div className="blog-heading">
                <h3>Blog</h3>
                <h1>Our Latest News</h1>
                <p>
                    This is the team that outlines and manages the work and activities
                    of our organization. We deliver quality services which ranks our consultancy a notch 
                    higher.
                </p>
            </div>

            <div className="blog-members">
               <i className="fas fa-angle-left"></i>
                <div className="blog-details">
                <div className="blog-image">
                   <img src="/img/project.webp" alt="project4"/>
                   </div>
                    <div className="author">
                       <img src="/img/team1.webp" alt="member1"/>
                       <p>Date: 01 Sept 2020</p>
                       <h5>How To Start a wed development blog.</h5>
                    </div>
                </div>

                <div className="blog-details">
                <div className="blog-image">
                   <img src="/img/project.webp" alt="project4"/>
                   </div>
                    <div className="author">
                      <img src="/img/team2.webp" alt="member1"/>
                      <p>Date: 01 Oct 2020</p>
                      <h5>How To Start a wed development blog.</h5>
                    </div>
                </div>

                <div className="blog-details">
                <div className="blog-image">
                   <img src="/img/project.webp" alt="project4"/>
                   </div>
                    <div className="author">
                      <img src="/img/team3.webp" alt="member1"/>
                      <p>Date: 01 Nov 2020</p>
                      <h5>How To Start a wed development blog.</h5>
                    </div>
                </div>

                <div className="blog-details">
                   <div className="blog-image">
                   <img src="/img/project.webp" alt="project4"/>
                   </div>
                    <div className="author">
                      <img src="/img/team4.webp" alt="project4"/>
                      <p>Date: 01 Dec 2020</p>
                      <h5>How To Start a wed development blog.</h5>
                    </div>
                </div>

                <i className="fas fa-angle-right"></i>
            </div>
        </div>
    )
}
