import React from 'react';
import profile from '../images/profile.jpeg'



function Header() {
  return (
      
    <div>
      <div >
          <img src= {profile} height={317} width={317}/>
      <div className="head-text"><h1>Ndukwe Ihuoma</h1>
      <h3>Frontend Developer</h3>
      <p>ihuoma.website</p></div>
      <div className="btn">
          <button className="email">Email</button>
          <button className="linkedin">LinkedIn</button>
      </div>
      
      
      
      </div>
    </div>
  )
}

export default Header;
