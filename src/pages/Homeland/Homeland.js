// src/pages/Homeland/Homeland.js
import React from "react";
import "./Homeland.css";
import { facebook, email, instagram, call, gmail, location, logo } from "../../assests";

function Homeland() {
  return (
    <div className="homeland-page">
      {/* Header */}
      <div className="header-bar">
        <div className="contact-details">
          <span>📞 +91-7888328778</span>
          <span>📞 +91-9872754844</span>
          <span className="spacer" />
          <span className="email-info">📧 abrolkanika6@gmail.com</span>
        </div>
        <div className="social-icons">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <a href="mailto:abrolkanika6@gmail.com">
            <img src={email} alt="Email" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <header className="homeland-header">
        <div className="header-top">
        <div className="homeland-logo">
          <img src={logo} alt="Abrolstate Logo" />
        </div>
        <ul className="homeland-menu">
          <li className="homeland-link">Homeland </li>
          <li>Buy</li>
          <li>Rent</li>
          <li>PG</li>
          <li>Projects</li>
          <li>Contact Us</li>
        </ul>
        </div>
      </header>

      {/* About Homeland Heights */}
      <section className="homeland-about">
        <h1>🏢 Homeland Heights – Sector 70, Mohali</h1>
        <p>
          Homeland Heights is a premier residential development located in Sector 70, Mohali, offering luxurious 3, 4, and 5 BHK apartments and penthouses. Developed by Homeland Buildwell, this project exemplifies modern urban living with contemporary architecture and world-class amenities.
        </p>

        <h2>Key Features:</h2>
        <ul>
          <li><strong>Spacious Residences:</strong> Units range from 1,788 to 4,310 sq. ft., designed to provide ample space for families.</li>
          <li><strong>Strategic Location:</strong> Excellent connectivity to major roads and proximity to commercial hubs, educational institutions, and healthcare facilities.</li>
          <li><strong>World-Class Amenities:</strong> Swimming pool, gym, landscaped gardens, children's play area, cycling/jogging tracks, 24/7 security.</li>
          <li><strong>Modern Infrastructure:</strong> High-quality construction ensuring durability and comfort.</li>
        </ul>

        <h2>Why Invest in Homeland Heights?</h2>
        <ul>
          <li><strong>Prime Location:</strong> Rapidly developing area with increasing demand for residential properties.</li>
          <li><strong>Luxury Living:</strong> High-end amenities and spacious apartments for a comfortable lifestyle.</li>
          <li><strong>Appreciation Potential:</strong> Strategic location and quality construction ensure property value growth.</li>
        </ul>
      </section>

      {/* About Sector 70 */}
      <section className="sector-info">
        <h1>🏘️ About Sector 70, Mohali</h1>
        <p>
          Sector 70 is a well-planned residential sector in Mohali, known for its serene environment and modern infrastructure. It offers easy access to various parts of the city and neighboring regions.
        </p>

        <h2>Key Infrastructure Includes:</h2>
        <ul>
          <li>Connectivity: Well-connected to major roads and highways.</li>
          <li>Utilities: Reliable water supply, electricity, and sewage systems.</li>
          <li>Public Services: Proximity to schools, hospitals, and shopping centers.</li>
        </ul>

        <h2>Area Benefits:</h2>
        <ul>
          <li>Educational Institutions: Reputed schools and colleges nearby.</li>
          <li>Healthcare Facilities: Access to quality hospitals and clinics.</li>
          <li>Commercial Hubs: Nearby employment and commercial centers.</li>
          <li>Recreational Spaces: Parks and recreational centers for leisure activities.</li>
        </ul>

        <h2>Why Invest in Sector 70, Mohali?</h2>
        <ul>
          <li>Strategic Location: Proximity to key areas and amenities enhances convenience.</li>
          <li>Developing Infrastructure: Ongoing projects boost property value.</li>
          <li>Community Living: Peaceful, community-oriented environment.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          Copyright © 2025 Abrolstate. All rights reserved. - 
          <a href="#" className="footer-link"> Terms & Conditions</a>
        </p>
      </footer>
    </div>
  );
}

export default Homeland;
