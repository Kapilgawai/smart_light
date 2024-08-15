import React from 'react';
import './EcosystemSection.css';
import streetlight from '../assets/images/streetlight.png';
import gateway from '../assets/images/gateway.png';
import cloud from '../assets/images/cloud.png';
import users from '../assets/images/users.png';
import evaluation from '../assets/images/evaluation.png';

function EcosystemSection() {
  return (
    <section className="ecosystem">
      <div className="ecosystem-header">
        <h3>Ecosystem</h3>
        <h2>How does a smart street <br />light ecosystem work?</h2>
      </div>
      <div className="flowchart">
     

      <div className="row1">

<div className="light">
<img src={streetlight}  style={{marginLeft:'80px'}} alt="Street Light Controller" className="logo" />
<nav>
  <h3>
    Street Light Controller
  </h3>
  <p>Activates/deactive in response to <br/>motion/light sensing and controls the <br/>brightness of the street lamp</p>
</nav>
</div>


<div className="light">
<img src={gateway}  style={{marginLeft:'60px'}} alt="Street Light Controller" className="logo" />
<nav>
  <h3>
Gateway  </h3>
<p>Empicynd for interfacing between a<br/> Controller and the Lighting <br/>Management Software</p>
</nav>
</div>


<div className="light">
<img src={cloud}  alt="Street Light Controller" className="logo" />
<nav>
  <h3>
Cloud-Based <br/> Management System  </h3>
<p>Colects information <br/>from multiple gateways</p>
</nav>
</div>








      </div>





      <div className="row2">


      <div className="light" >
<img src={users}  style={{marginLeft:'0px'}} alt="Street Light Controller" className="logo" />
<nav>
  <h3>
    Users
  </h3>
  <p>Data from the cloud is used to<br/>
monitor and control street lights<br/>
by the System Managers.</p>
</nav>
</div>


<div className="light">
<img src={evaluation}  style={{marginLeft:'00px'}} alt="Street Light Controller" className="logo" />
<nav>
  <h3>
Evaluation  </h3>
<p>Gathered insights are used<br/>
to evaluate the performance<br/>
of the lighting systems.</p>
</nav>
</div>

      </div>


      </div>
    </section>
  );
}

export default EcosystemSection;
