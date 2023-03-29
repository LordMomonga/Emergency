import React from "react";
import dev from "../icons/dev.svg";
import App from "./particules";

const DevSection = () => {
  return (
    <div className="dev-section-container">
      
      <h1 className="dev-section-title">
        Building Cross•Chain <span className="highlighted">Together</span>
      </h1>
      <div className="dev-section-wrapper">
        <div className="dev-section-text">
          <h2>API SDK</h2>
          <p className="dev-section-description">
          oui c'est possible
Nous avons créé Emergency Crypto, pour vous aider à effectuer des échanges entre chaînes en quelques clics. Vous pourrez facilement convertir vos pièces d'une blockchain à une autre, ou les échanger contre d'autres crypto-monnaies et jetons.
          
          </p>
          <div className="btn-wrapper">
            <button className="primary">
              <span>Plus loin</span>
            </button>
            <button className="secondary">
              <span>voir plus</span>
            </button>
          </div>
        </div>
        <div className="dev-section-image">
          <img src={dev} alt="dev tools" />
        </div>
      </div>
    </div>
  );
};

export default DevSection;
