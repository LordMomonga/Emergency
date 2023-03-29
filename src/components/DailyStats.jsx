import React from "react";

const DailyStats = () => {
  return (
    <div className="daily-stats-container gradient-border">
      <div className="metric-container">
        <span className="metric-title">E-crypto Price</span>
        <span className="metric-value">$0.11 USD</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Supported</span>
        <span className="metric-value">we are new</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Total Liquidity</span>
        <span className="metric-value">$....load</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Total Trades</span>
        <span className="metric-value">$...load</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Daily Active Users</span>
        <span className="metric-value">...+</span>
      </div>
    </div>
  );
};

export default DailyStats;
