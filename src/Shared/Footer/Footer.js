import React from 'react';
import './Footer.css'
const Footer = () => {
    
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
   <div className="foorter">
  
        Copywrite © {year} Wedding Photography.
     
   </div>
    </footer>
  );
    
}

export default Footer;