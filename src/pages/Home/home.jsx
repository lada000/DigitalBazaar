import React from "react";
import Description from "./_description";
import ProductsList from "./_productsList";
import Categories from "./_categories";
import Header from "../../components/Header";




const Home = () => {
  return (
    <>
    <Header/>
    <Description/>
    <ProductsList/>
    <Categories/>  
    </>
  );
};

export default Home;
