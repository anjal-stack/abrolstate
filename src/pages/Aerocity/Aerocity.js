import React from "react";
import "./Aerocity.css";
import { facebook, email, instagram, call, gmail, location, logo  } from "../../assests";



function About() {
  return (
    <div className="App">
      {/* ✅ Top Header Bar */}
      <div className="header-bar">
        <div className="contact-details">
          <span>📞+91-7888328778</span>
          <span> 📞+91-9872754844</span>
          <span className="spacer" />
          <span className="email-info">📧 abrolkanika6@gmail.com</span>
        </div>
        <div className="social-icons">
          <img src={facebook} alt="facebook icon" />
          <a href="https://mail.google.com" title="Send Email" target="_blank" rel="noopener noreferrer">
            <img src={email} alt="Email icon" />
          </a>
          <a
            href="https://www.instagram.com/___anjaliiiie___?utm_source=qr&igsh=MW51OHAwZXRuNHJzcg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      {/* ✅ Hero Section */}
      <header className="Aerocity-header">
        <div className="header-top">
          <div className="Aerocity-logo">
            <img src={logo} alt="Real Estate Logo" />
          </div>
          <ul className="Aerocity-menu">
            <li className="Aerocity-link">Aerocity</li>
            <li>Buy</li>
            <li>Rent</li>
            <li>PG</li>
            <li>Projects</li>
            <li>Contact Us</li>
          </ul>
          </div>
        
      </header>
      <div className="aerocity-intro">
        <p>
          <strong>AeroCity</strong> is one of the fastest-developing and most sought-after residential and commercial
          hubs in <strong>Mohali</strong>. Strategically located near <strong>Sector 66B</strong>, <strong>IT City</strong>,
          and <strong>Sector 82A</strong>, it offers seamless connectivity to <strong>Chandigarh International Airport</strong> via a
          200-ft wide road — making it ideal for homebuyers, investors, and business owners alike.
        </p>
        <p>
          Rated <strong>4.2/5 for connectivity</strong> and <strong>4.0/5 for safety</strong> by residents, AeroCity Mohali
          stands out as a well-planned locality designed for modern living. The area offers over <strong>700 properties for sale</strong> and
          <strong> 150+ rental options</strong>, including plots, villas, kothis, and commercial spaces.
        </p>
      </div>
      
<div className="aerocity-info-section">
  <h2>Developed by GMADA - A Visionary Township</h2>
  <p>
    Developed by <strong>GMADA (Greater Mohali Area Development Authority)</strong>, AeroCity spans over <strong>1,000 acres</strong> of
    mixed-use development. It features <strong>residential, commercial, and industrial plots</strong> on both sides of the 200-ft Airport Road.
    The location links <strong>Sector 66A</strong> to the <strong>Chandigarh–Patiala National Highway (NH-64)</strong> near Village Chhat.
  </p>
  <h3>Key Infrastructure Includes:</h3>
  <ul className="aerocity-key-list">
    <li>📍 5000+ plots ranging from 125 to 500 sq. yards</li>
    <li>🚧 Developed roads, water supply, electricity, and sewage</li>
    <li>🏗️ Fully executed by <strong>Larsen & Toubro (L&T)</strong> – known for world-class urban infrastructure</li>
    <li>✈️ Proximity to the upcoming International Airport Terminal</li>
  </ul>
  <h3>🏡 Why Invest in AeroCity?</h3>
  <ul className="aerocity-benefits-list">
    <li>✨ Independent integrated township with modern amenities</li>
    <li>📍 Prime location near IT City, Knowledge City, World Trade Center, and Elante Mall</li>
    <li>💼 Growing demand for office spaces, SCOs, and residential plots</li>
    <li>🚗 Quick access to Chandigarh, Zirakpur, Panchkula, and Delhi Highway</li>
  </ul>
</div>
<section className="map-section">
  <h2>📍 Find Us on Google Maps</h2>
  <div className="map-container">
     <iframe
      title="Abrolstate Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.123456789!2d76.7075!3d30.7046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed1c4b5a1234%3A0xabcd1234567890!2sSCO%2058%2C%20Sector%2082%2C%20Mohali!5e0!3m2!1sen!2sin!4v1234567890"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</section>

    <footer className="footer">
<p>
    Copyright © 2025 Weblink .In Pvt. Ltd. All rights reserved. -
    <a href="#" className="footer-link"> Terms & Conditions</a>
  </p>
    </footer>
    </div> 
  );
}
export default About;
