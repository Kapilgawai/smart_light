// import React from 'react';
// import './BenefitsSection.css';
// import icon from '../assets/images/icon.png'; 

// function BenefitsSection() {
//   return (
//     <section className="benefits">
//       <div className="benefits-container">
//         <div className="card-row">
//           <div className="card">
//             <img src={icon} alt="Benefit Icon" />
//             <p>The platform assists city managers on multiple fronts</p>
//           </div>
//           <div className="card">
//             <img src={icon} alt="Benefit Icon" />
//             <p>Saves on power consumption & related costs</p>
//           </div>
//           <div className="card">
//             <img src={icon} alt="Benefit Icon" />
//             <p>Lowers downtimes</p>
//           </div>
//         </div>
//         <div className="card-row">
//           <div className="card">
//             <img src={icon} alt="Benefit Icon" />
//             <p>Detects power thefts.</p>
//           </div>
//           <div className="card">
//             <img src={icon} alt="Benefit Icon" />
//             <p>Ensures smart monitoring and control of the street light infrastructure</p>
//           </div>
//           <div className="card">
//             <img src={icon} alt="Benefit Icon" />
//             <p>Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.</p>
//           </div>
//         </div>
//         <div className="card-row">
//           <div className="card">
//             <img src={icon} alt="Benefit Icon" />
//             <p>Ensures security in the neighborhood</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BenefitsSection;









import React from 'react';
import './BenefitsSection.css';
import icon from '../assets/images/icon.png'; 

function BenefitsSection() {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <div className="card-row">
          <div className="card">
            <img src={icon} alt="Benefit Icon" />
            <p>The platform assists city managers on multiple fronts</p>
          </div>
          <div className="card">
            <img src={icon} alt="Benefit Icon" />
            <p>Saves on power consumption & related costs</p>
          </div>
          <div className="card">
            <img src={icon} alt="Benefit Icon" />
            <p>Lowers downtimes</p>
          </div>
        </div>
        <div className="card-row">
          <div className="card">
            <img src={icon} alt="Benefit Icon" />
            <p>Detects power thefts.</p>
          </div>
          <div className="card">
            <img src={icon} alt="Benefit Icon" />
            <p>Ensures smart monitoring and control of the street light infrastructure</p>
          </div>
          <div className="card">
            <img src={icon} alt="Benefit Icon" />
            <p>Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.</p>
          </div>
        </div>
        <div className="card-row">
          <div className="card">
            <img src={icon} alt="Benefit Icon" />
            <p>Ensures security in the neighborhood</p>
          </div>
        </div>
      </div>

      <div className="carousel">
        <div className="carousel-track">
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>The platform assists city managers on multiple fronts</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Saves on power consumption & related costs</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Lowers downtimes</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Detects power thefts.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Ensures smart monitoring and control of the street light infrastructure</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Ensures security in the neighborhood</p>
            </div>
          </div>
          {/* Duplicate the items for seamless effect */}
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>The platform assists city managers on multiple fronts</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Saves on power consumption & related costs</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Lowers downtimes</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Detects power thefts.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Ensures smart monitoring and control of the street light infrastructure</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img src={icon} alt="Benefit Icon" />
              <p>Ensures security in the neighborhood</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
