import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EcosystemSection from "./components/EcosystemSection";
import ProductsSection from "./components/ProductsSection";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <HeroSection />
      <EcosystemSection />
      <ProductsSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
}

export default App;
