import React from 'react';
import profile from '../images/profile.jpeg'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'


function Header() {
  return (
      
    <div>
      <div className="container">
          <img src= {profile} height={317} width={317}/>
      <div className="head-text"><h1>Ndukwe Ihuoma</h1>
      <h3>Frontend Developer</h3>
      <p>ihuoma.website</p></div>
      <div className="btn">
          <button className="email">Email</button>
          <button className="linkedin">LinkedIn</button>
      </div>
      <h2>About</h2>
      <p>I am a frontend developer with interest in making life comppletely easy fpr everyone</p>
      <h2>Interest</h2>
      <p> Music. Poetry. Internet fanatic. Entrepreneur.  Pop culture ninja. Juice Maker.</p>
      <ul className="icons">
          <li><img src= {twitter}/></li>
          <li><img src= {facebook}/></li>
          <li><img src= {instagram}/></li>
          <li><img src= {github}/></li>
      </ul>
      </div>
    </div>
  )
}

export default Header;
