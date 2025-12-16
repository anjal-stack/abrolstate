import "./Home.css";
import MohaliWalkImg from "./Mohaliwalk.jpg";
import Sector86Img from "./Sector86.jpg";
import NewChandigarhImg from "./Newchandigarh.jpg";
import AeroCityImg from "./Aerocity.jpg";
import vrmallImg from "./vrmall.jpg";
import jubliewalkImg from "./jubliewalk.jpg";
import sector35Img from "./sector35.jpg";
import homelandImg from "./homeland.jpg";
import Tenant from './Management/Tenant.png';
import Construction from './Management/Construction.png';
import Rental from './Management/Rental.png';
import RealEstateBuying from './Management/RealEstateBuying.png';
import RealEstateSelling from './Management/RealEstateSelling.png';
import Interior from './Management/Interior.png';
import Property from './Management/Property.png';
import Renovation from './Management/Renovation.png'; 
import lease from './Management/lease.png';
import imageImg from "./image.png";
import { facebook, instagram, email, call, gmail, location, logo} from "../../assests";
import blueprintImg from "./blueprint.png";
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* ✅ Top Header Bar */}
      <div className="header-bar">
        <div className="contact-details">
          <span> 📞+91-7888328778</span>
          <span> 📞+91-9872754844</span>
          <span className="spacer" />
          <span className="email-info">📧abrolkanika6@gmail.com</span>
        </div>
        <div className="social-icons">
          <img src={facebook} alt="facebook icon" />
          
            <a  href="https://mail.google.com" title="Send Email" target="_blank">
           <img src={email} alt="Email icon" />
          </a>
          <a href="https://www.instagram.com/___anjaliiiie___?utm_source=qr&igsh=MW51OHAwZXRuNHJzcg==" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="instagram"/>
        </a>
        </div>
      </div>
      {/* ✅ Hero Section */}
   <header className="hero">
  <div className="hero-top">
    <div className="hero-logo">
      <img src={logo} alt="Real Estate Logo" />
    </div>
    <ul className="nav-links">
      <li className="mohali-link">Mohali</li>
      <li>Buy</li>
      <li>Rent</li>
      <li>PG</li>
      <li>Projects</li>
      <li>Contact Us</li>
    </ul>
  </div>
  <div className="hero-text">
    <h1>YOUR CITY WITHIN THE CITY</h1>
    <p>
      We focus on architecturally sound homes, smart commercial buildings, and high-potential land — all located in the most promising cities and towns in Punjab and surrounding regions. Whether it's your dream home or your next big investment, explore properties that are built for tomorrow.
    </p>
  </div>
</header>
<div className="our-city">
  <h1> OUR CITIES & PROJECTS</h1>
</div>
  <section className="info-cards">
  <div className="location-card">
    <img src={AeroCityImg} alt="Aerocity" />
      <h3>AERO CITY</h3>
         <Link to="/aerocity">Read More →</Link>
    </div>
<div className="location-card">
    <img src={homelandImg} alt="homeland" />
      <h3>HOMELAND</h3>
      <Link to="/homeland">Read More →</Link>
    </div>
<div className="location-card">
    <img src={jubliewalkImg} alt="JUBLIEWALK" />
      <h3>JUBLIEWALK</h3>
      <Link to="/jubliewalk">Read More →</Link>
    </div>
<div className="location-card">
    <img src={sector35Img} alt="sector 35" />
      <h3>SECTOR 35</h3>
      <Link to="/sector35">Read More →</Link>
    </div>
    <div className="location-card">
    <img src={vrmallImg} alt="vr mall" />
      <h3>VR MALL </h3>
      <a href="">Read More →</a>
    </div>
  <div className="location-card">
    <img src={Sector86Img} alt="Sector86" />
    <h3>SECTOR 86</h3>    
    <a href="">Read More →</a>
  </div>
  <div className="location-card">
    <img src={NewChandigarhImg} alt="Newchandigarh" />
     <h3>NEW CHANDIGARH</h3>
     <a href="">Read More →</a>
    </div>
  <div className="location-card">
    <img src={MohaliWalkImg} alt="Mohali Walk" />
     <h3>MOHALI WALK</h3>
     <a href="">Read More →</a>
      </div>
</section>
<div className="description">
  <h1> Welcome to Abrolstate Real Estate</h1>
    <p>Get flats, apartments, commercial plots, residential 
      plots, SCO, showrooms, office spaces, industrial areas,
       institutional spaces in Aero City, Eco City, IT City, Sector 88-89, 
       WTC, ATS, Knowledge City and JLPL, Mohali.</p>
</div>
      <div className="blueprint-section">
       <div className="blueprint-content">
        <p >Discover an elegant and well-planned 3-bedroom single-storey home layout with Abrolstate — ideal for families,
         professionals, and investors seeking premium living in Greater Mohali. This home features an open-concept living 
         area with a high-ceilinged Great Room, a modern kitchen with a center island and pantry, and a luxurious master
          suite with dual vanities, a freestanding tub, and a glass-enclosed shower.Additional bedrooms, a spacious garage,
         a laundry room, and a large covered porch add to the home's functionality.Designed to fit well on plots across Aero 
         City, IT City, Sector 88–89, and New Chandigarh, this layout offers comfort, efficiency, and long-term value.
         Abrolstate helps you select the right plot, verify legal approvals, and finalize construction — all under one roof.
         Get in touch with us today for personalized guidance and site visits.Our expert team ensures that every detail, 
         from architectural design to finishing touches, meets the highest standards of quality and style. Experience seamless
         project management and timely updates throughout your home-building journey. Let us help you create a space that reflects
          your lifestyle and aspirations, making your dream home a reality.</p>
        <img src={blueprintImg} alt="blueprint of building"/>
       </div>
       </div>
<div className="heading">
  <h1>Property Management Simplified</h1>
</div>
 <div className="project-management">
  <div className="Tenant-Management">
     <img src={Tenant} alt="Tenant Management" />
     <h3>Tenant Management</h3>
     <p>Renting out your property shouldn’t be stressful. 
      We take the worry off your shoulders by handling everything—from
     finding reliable tenants to making sure your property is safe and well cared for. 
     No more chasing late payments or dealing with difficult renters. 
      We keep your property occupied, protected, and profitable.</p>
     <a href="">Read More →</a>
      </div>
      <div className="Renovation">
         <img src={Renovation} alt="Renovation" />
     <h3>Renovation</h3>
    <p>Thinking of giving your property a fresh new look?
       We help you improve or repair your space with the help of trusted vendors.
        From stylish interiors to functional modular kitchens, 
      we make renovation easy and stress-free.</p>
       <a href="">Read More →</a>
      </div>
      <div className="Construction">
        <img src={Construction} alt="Construction" />
     <h3>Construction</h3>
     <p>Building your dream space? We’re here to help. 
      Whether it’s a complete construction project or adding modern interiors, wardrobes, and kitchens, 
      our expert partners ensure top quality from start to finish.</p>
       <a href="">Read More →</a>
      </div>
      
      <div className="Rental Assistance">
        <img src={Rental} alt="Rental Assistance" />
     <h3>Rental Assistance</h3>
     <p>Designed especially for NRIs and busy individuals, 
      our rental assistance service takes care of everything—from listing your property to managing tenant needs. 
      You enjoy the benefits without the day-to-day hassle.</p>
       <a href="">Read More →</a>
      </div>
      
      <div className="Real Estate Buying">
        <img src={RealEstateBuying} alt="Real Estate Buying" />
     <h3>Real Estate Buying</h3>
      <p>Looking to buy property in the Tricity area? Our experienced team helps 
      you find the perfect residential or commercial space—without the confusion, stress,
       or hidden details. We make property buying simple and transparent.</p>
        <a href="">Read More →</a>
      </div>
      
      <div className="Real Estate Selling">
        <img src={RealEstateSelling} alt="Real Estate Selling" />
     <h3>Real Estate Selling</h3>
    <p>Selling a property can be overwhelming—but not with us. 
      We help you find serious buyers quickly, manage all the paperwork,
       and make the entire process smooth and stress-free.</p>
        <a href="">Read More →</a>
      </div>
      
      <div className="Interior Design">
          <img src={Interior} alt="Interiordesign" />
     <h3>Interior Design</h3>
   <p>Whether you need a full makeover or just want to refresh a room, 
      our interior design team is here to help. From small upgrades to complete commercial setups,
      we deliver quality, creativity, and reliability.</p>
       <a href="">Read More →</a>
      </div>
      
      <div className="Property Monitoring">
        <img src={Property} alt="Property Monitoring" />
     <h3>Property Monitoring</h3>
      <p>Away from your property for long periods? We regularly check and
       monitor your land or home to protect it from encroachment, damage, 
      or illegal activity—giving you peace of mind, wherever you are.</p>
       <a href="">Read More →</a>
      </div>
<div className="Lease Management">
        <img src={lease} alt="Lease Management" />
     <h3>Lease Management</h3>
      <p>Managing leases might seem straightforward—but in reality, 
        it’s a delicate balance of legal precision, financial oversight, and timely coordination.
         Our Lease Management service takes the complexity off your plate, ensuring your property remains
         protected and profitable at every stage of the lease cycle.</p>
       <a href="">Read More →</a>
      </div>
</div>
<div  id="property-manage">
  <img src={imageImg} alt="property management" />
</div>

{/*mission  */}
<div className="mission-section">
  <div className="mission-content">
    <h2 className="mission-heading">OUR MISSION</h2> 
    
    <p className="mission-description">
      <span className="tagline-Y">Y</span>our dream home is just one step away.
      Our mission is to help people turn their real estate dreams into reality. We are committed to delivering reliable, value-focused, and expert property solutions that match each client's lifestyle and long-term goals. With deep market knowledge, transparent guidance, and a passion for property, we ensure every step of your journey feels confident and rewarding.
    </p>

    <div className="mission-points">
      <div className="mission-point">
        <h4>🏡 Property Solutions</h4>
        <p>Tailored property recommendations based on your vision and budget.</p>
      </div>
      <div className="mission-point">
        <h4>💼 Investment Value</h4>
        <p>Maximize returns through smart and secure real estate investment guidance.</p>
      </div>
      <div className="mission-point">
        <h4>📍 Location Expertise</h4>
        <p>Local market insights to help you find the right home in the right area.</p>
      </div>
      <div className="mission-point">
        <h4>🤝 Trusted Partnership</h4>
        <p>We walk with you from property search to closing, every step of the way.</p>
      </div>
    </div>
  </div>
</div>

{/*form section */}
<div className="form-section">
  {/* Left side contact details */}
  <div className="contact-info-boxes">
    <div className="info-box">
      <img src={call} alt="Contact us"/>
      <h3>Message Our Team</h3>
      <p>+91-7888328778<br />+91-9872754844</p>
    </div>
    <div className="info-box">
      <img src={gmail} alt="gmail"/>
      <h3>Emails</h3>
      <p>abrolkanika6@gmail.com<br />kuber185@gmail.com</p>
    </div>
    <div className="info-box">
      <img src={location} alt="location"/>
      <h3>Our Location</h3>
      <p>SCO 58, 1st Floor,<br />Sector 82, JLPL Mohali (PB.)</p>
    </div>
  </div>
  {/* Right side contact form */}
  <form className="contact-form-box">
    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Your Email" />
    <input type="tel" placeholder="Your Phone Number" />
    <input type="date" placeholder="dd-mm-yyyy" />
    <textarea placeholder="Your Message"></textarea>
    <button type="submit">Submit</button>
    </form>
    </div>
<div className="disclaimer-note">
  <p>
    <strong>Note:</strong> Abrolstate is an intermediary platform that facilitates the listing, promotion, and discovery of real estate properties. We act solely as a digital marketplace to connect buyers, sellers, landlords, and tenants. All property details, legal approvals, and RERA compliance are the sole responsibility of the respective users or developers listing their properties. Users are advised to conduct due diligence and verify all details independently before entering into any transaction. Abrolstate shall not be held liable for any disputes, losses, or discrepancies arising from interactions on the platform.
  </p>
</div>

    <footer className="footer">
<p>
    Copyright © 2025 Weblink .In Pvt. Ltd. All rights reserved. -
    <a href="#" className="footer-link"> Terms & Conditions</a>
  </p>
    </footer>
</div>
  );
}
export default App;
