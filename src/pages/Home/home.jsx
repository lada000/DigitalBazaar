import React from "react";
import Description from "./_description";
import ProductsList from "./_productsList";
import Categories from "./_categories";
import Header from "../../components/Header";
import Footer from "../../components/footer";




const Home = () => {
  return (
    <>
    <Header/>
    <Description/>
    <ProductsList/>
    <Categories/>  
    <Footer/>
    </>
  );
};

export default Home;
