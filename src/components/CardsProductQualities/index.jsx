import React from "react";
import './sass/styles.scss';

const CardsProductQualities = ({ image, legend, subtitle }) => {
  return (
    <div className="StyledCard">
      <img className="Image" src={image} alt={legend} />
      <div className="LegendBox">
        <h2 className="Subtitle">{subtitle}</h2>
      </div>
    </div>
  );
};

export default CardsProductQualities ;
