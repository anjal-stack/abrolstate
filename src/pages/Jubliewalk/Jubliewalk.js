// src/pages/Jubliewalk/Jubliewalk.js
import React from "react";
import "./Jubliewalk.css";
import { facebook, email, instagram, call, gmail, location, logo } from "../../assests";

function Jubliewalk() {
  return (
    <div className="jubliewalk-page">
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
      <header className="jubliewalk-header">
        <div className="header-top">
        <div className="logo-container">
          <img src={logo} alt="Abrolstate Logo" />
        </div>
        <ul className="navigation-menu">
          <li className="jubliewalk-link">JUBLIEWALK </li>
          <li>Buy</li>
          <li>Rent</li>
          <li>PG</li>
          <li>Projects</li>
          <li>Contact Us</li>
        </ul>
        </div>
      </header>

      <div className="jubilee-container">
      {/* Jubilee Walk Section */}
      <section className="jubilee-section">
        <h1>🏢 Jubilee Walk, Mohali – The New-Age Commercial Landmark</h1>
        <p>
          Jubilee Walk is one of the most premium commercial developments in
          Mohali, redefining high-street retail and modern business spaces.
          Strategically located in Sector 70, Mohali, it is designed as a
          mixed-use project with retail showrooms, office spaces, and
          entertainment zones — making it an attractive hub for investors,
          entrepreneurs, and brands.
        </p>
        <p>
          Rated highly by investors for its strategic location and future
          growth, Jubilee Walk has become a hot choice for retail and office
          space buyers in Tricity.
        </p>

        <h2>Developed by Jubilee Group – A Trusted Brand</h2>
        <p>
          Jubilee Group is known for creating landmark commercial and
          residential projects in Mohali and Chandigarh. With cutting-edge
          architecture and world-class facilities, Jubilee Walk brings together
          shopping, dining, working, and entertainment in one vibrant
          destination.
        </p>

        <h3>✅ Key Infrastructure Includes:</h3>
        <ul>
          <li>📍 Premium retail showrooms and office spaces</li>
          <li>🚧 Wide front with maximum visibility on Sector 70 Road</li>
          <li>🏗️ Modern architecture with high footfall potential</li>
          <li>🚘 Ample car parking facility for visitors & tenants</li>
          <li>🎥 Entertainment & food zones to attract families & professionals</li>
          <li>
            🏢 Proximity to residential sectors like 69, 70, 71 & 79 — ensuring
            steady customer base
          </li>
        </ul>

        <h3>💡 Why Invest in Jubilee Walk?</h3>
        <ul>
          <li>✨ Prime Location – Situated in Sector 70, near Airport Road & Chandigarh.</li>
          <li>🏙️ High Footfall Zone – Surrounded by dense residential & commercial catchment.</li>
          <li>💼 Assured Returns – Commercial spaces in Mohali are witnessing rapid appreciation.</li>
          <li>🌆 Future Growth Potential – Close to IT hubs, hospitals, schools, and business centers.</li>
        </ul>
      </section>

      {/* Sector 70 Section */}
      <section className="sector-section">
        <h1>🏘️ Sector 70, Mohali – A Residential & Commercial Hub</h1>
        <p>
          Sector 70 is one of Mohali’s most well-planned and rapidly developing
          residential sectors. Known for its peaceful environment, strategic
          connectivity, and modern infrastructure, it offers both residential
          and commercial opportunities, making it a balanced locality for
          families and investors alike.
        </p>
        <p>
          Rated 4.1/5 for connectivity and 4.0/5 for safety by residents, Sector
          70 is a popular choice for both homebuyers and working professionals.
        </p>

        <h3>✅ Key Infrastructure Includes:</h3>
        <ul>
          <li>📍 Excellent road connectivity to Chandigarh, Airport Road & National Highway</li>
          <li>🏗️ Well-developed water supply, electricity, and sewerage system</li>
          <li>🏥 Nearby hospitals like Fortis, MAX, and Civil Hospital Mohali</li>
          <li>🎓 Educational institutions like Gian Jyoti Institute & Chandigarh University (nearby)</li>
          <li>🏢 Shopping centers, Jubilee Walk, and local markets for convenience</li>
          <li>🌳 Parks and recreational facilities for family-friendly living</li>
        </ul>

        <h3>💡 Why Invest in Sector 70, Mohali?</h3>
        <ul>
          <li>✨ Strategic Location – Close to Chandigarh and Airport Road.</li>
          <li>🏠 Balanced Development – Residential apartments, plots, and commercial hubs.</li>
          <li>💼 High Rental Demand – Surrounded by corporate offices and educational institutes.</li>
          <li>🌆 Rising Property Value – With projects like Jubilee Walk and Homeland Heights nearby, property prices are appreciating fast.</li>
        </ul>
      </section>
    </div>

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

export default Jubliewalk;
