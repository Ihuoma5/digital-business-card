import React from 'react';
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'

function Fotter() {
  return <div ><ul className="icons">
  <li><img src= {twitter}/></li>
  <li><img src= {facebook}/></li>
  <li><img src= {instagram}/></li>
  <li><img src= {github}/></li>
</ul></div>;
}

export default Fotter;
