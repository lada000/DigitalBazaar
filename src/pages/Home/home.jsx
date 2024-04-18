import React from "react";
import Description from "./_description";
import ProductsList from "./_productsList";
import Categories from "./_categories";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import Reviews from "./_reviews";
import StartSelling from "./_startSelling";




const Home = () => {
  return (
    <>
    <Header/>
    <Description/>
    <ProductsList/>
    <Categories/>  
    <Reviews/>
    <StartSelling/>
    <Footer/>
    </>
  );
};

export default Home;
