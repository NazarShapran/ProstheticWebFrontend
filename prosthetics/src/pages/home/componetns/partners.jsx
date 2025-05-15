import React from 'react';
import './partnersStyles.css';
import logo1 from '../../../common/svgs/logo_1.svg';
import logo2 from '../../../common/svgs/logo_2.svg';
import logo3 from '../../../common/svgs/logo_3.svg';
import logo4 from '../../../common/svgs/logo_4.svg';

const Partners = () => {
  const logos = [logo1, logo3, logo4, logo2];

  return (
    <section className="partners-container">
      <h2 className="partners-title">Наші партнери</h2>
      <div className="logo-grid">
        {logos.map((logo, index) => (
          <div key={index} className="logo-wrapper">
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
