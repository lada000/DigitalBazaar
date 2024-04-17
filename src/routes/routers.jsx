import React from "react";
import Home from "../pages/Home/home";
import PrivacyPolice from "../pages/privacyPolice";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TermsOfService from "../pages/termsOfService";


const AllRoutes = () => (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolice />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />

      {/* Add more routes as needed */}
    </Routes>
 </Router>
)
export default AllRoutes;