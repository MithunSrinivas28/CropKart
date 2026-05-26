import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


export default function App() {
 
  return (

    
    <div>
       {/* Akash this is the Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#buy">Buy</a></li>
          <li><a href="#about">Market</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
        
      
      <div className="content">
        <h1>CropKart</h1>
        
        <p>
          CropKart: Your all-in-one digital marketplace for fair trade, affordable farm equipment, and smarter agriculture.
        </p>
      </div>
       
       <div className="section home-section" id="home">
  <h1>All-in-one digital marketplace for farmers</h1>
  <p>Empowering farmers, connecting buyers, and growing together</p>

  <div className="cards-container">
    <div className="card">
      <h2>What We Are</h2>
      <p>Farmer’s Boon — empowering agriculture with fairness and technology.</p>
    </div>

    <div className="card">
      <h2>What We Do</h2>
      <p>We connect farmers directly with buyers, ensuring fair trade and access to resources.</p>
    </div>

    <div className="card">
      <h2>Trusted By</h2>
      <p>Over <strong>10,000+</strong> farmers across the country.</p>
    </div>
  </div>
</div>

<div className="section buy-section" id="buy">
   <div className ="Tools">
    
  <h1>
    Farming Tools</h1>
  </div>
  <div className ="Irrigiation">
  <h1>Irrigation Systems</h1>
  </div>
  <div className ="Planting">
  <h1>Sowing & Planting</h1>
  </div>

  <div className ="Crop Care">
  <h1>Crop Care</h1>
  </div>
   <div className ="seeds">
  <h1>Seeds</h1>
  </div>
   <div className ="Fertilizers">
  <h1>Eco Feritlizers</h1>
  </div>



</div>

  
      <div className="section contact-section" id="contact">
  <h1>Contact Us</h1>
  <p>Email: support@cropkart.com</p>
  <p>Phone 1: +91 12345 67890</p>
  <p>Phone 2: +91 98765 43210</p>
  <p>Phone 3: +91 11223 44556</p>
</div>
 
    </div>
       
    
  );
}
