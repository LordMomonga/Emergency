import React from "react";
import TokenCard from "./TokenCard";
const FeatureOne = () => {
    const tokens = ["0x", "01coin"];
  return (
    <div className="feature-container">
      <div className="swap-token-container">
        <div className="tokens-container">
          {tokens.map((token, index) => {
            return <TokenCard id={token} />;
          })}
        </div>
        <div className="btn-container">
          <button className="primary">échange</button>
        </div>
      </div>
      <div className="feature-description">
        <div className="feature-description-title">
          <h1>
            <span className="highlighted">Swap</span> Any Token, Any Chain
          </h1>
        </div>
        <p className="feature-description-paragraph">
        Nous avons créé Emergency Crypto pour vous aider à effectuer des échanges entre chaînes en seulement
          quelques clics. Vous pourrez facilement convertir vos pièces d'un
          blockchain à une autre, ou les échanger contre d'autres crypto-monnaies et
          jeton.
        </p>
        <div className="btn-container">
          <button className="secondary">
            <span>Start swapping</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default FeatureOne;