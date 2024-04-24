import { React, useLayoutEffect } from "react";
import Home from "../pages/Home/home";
import PrivacyPolice from "../pages/privacyPolice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermsOfService from "../pages/termsOfService";
import LogIn from "../pages/logIn";
import { useLocation } from "react-router-dom";
import SignUp from "../pages/signUp";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AllRoutes = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/privacy-policy' element={<PrivacyPolice />} />
      <Route path='/terms-of-service' element={<TermsOfService />} />
      <Route path='/log-in' element={<LogIn />} />
      <Route path='/sign-up' element={<SignUp />} />


      {/* Add more routes as needed */}
    </Routes>
  </Router>
);
export default AllRoutes;
