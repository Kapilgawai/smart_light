import React from 'react';
import './ProductsSection.css';
import divImage from '../assets/images/div.jpg'; 
import icon from '../assets/images/icon.png'; 


function ProductsSection() {
  return (
    <section className="products">
      <div className="products-header">
        <h3>Products</h3>
        <h2><span className="highlight">Cutting-edge hardware</span>, offerings <br/>helping cities optimize resources and<br/> achieve smart development goals</h2>
      </div>
      <div className="product-tabs">
        <button >Centralized Control & Monitoring System</button>
        <button>NEMA-Mounted VOLC 1160</button>
        <button>Retrofit Street Light Controller VOLC 2160</button>
        <button>Retrofit Street Light Controller VOLC 2180</button>
      </div>
      <button class="custom-button">Retrofit Street Light Controller VOLC 4180</button>

      <div className="product-display">



      <div className="product-info">
          <div className="image-container">
            <img src={divImage} alt="Product" />
          </div>
          <div className="text-container">
            <h1>Centralized Control <br/>& Monitoring System</h1>
            <p>Designed indigenously for street lighting projects,<br/> the CCMS offers a complete feeder panel for a<br/> group of 30-50 street lights.</p>
            <p style={{display:"flex", gap:"10px", color:"blue", cursor:"pointer"}}>know more <img src={icon} alt="Product" /></p>
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default ProductsSection;
