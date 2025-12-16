import './pages/Home/Home.css';  
import Home from "./pages/Home/Home";
import Aerocity from "./pages/Aerocity/Aerocity"; // Aerocity page component
import Homeland from './pages/Homeland/Homeland'; // Homeland page component
import Jubliewalk from './pages/Jubliewalk/Jubliewalk'; // Jubliewalk page component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />             {/* Home page */}
        <Route path="/aerocity" element={<Aerocity />} /> {/* Aerocity page */}
        <Route path="/homeland" element={<Homeland />} />  {/* Homeland page */}
        <Route path="/jubliewalk" element={<Jubliewalk />} /> {/* Jubliewalk page */}
      
      </Routes>
    </Router>
  );
}
export default AppRouter;
