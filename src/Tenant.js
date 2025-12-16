function App() {
  return (
    <div className="App">

      {/* ✅ Top Header Bar */}
      <div className="header-bar">
        <div className="contact-details">
          <span>+91-7888328778</span>
          <span>+91-9872754844</span>
          <span className="spacer" />
          <span className="email-info">📧 abrolkanika6@gmail.com</span>
        </div>
        <div className="social-icons">
          <img src={facebook} alt="facebook icon" />
          <img src={email} alt="Email icon" />
        <img src={instagram} alt="instagram"/>
        </div>
      </div>

      {/* ✅ Hero Section */}
   <header className="hero">
  <div className="hero-top">
    <div className="hero-logo">
      <img src={logo} alt="Real Estate Logo" />
    </div>
    </div>
     </header>

     </div>
  );
}


