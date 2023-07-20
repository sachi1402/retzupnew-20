import React from "react";
import "./ScalitonCard.scss"; // Add CSS for the skeleton effect

const ScalitonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img"></div>
      <div className="skeleton-info">
        <div className="skeleton-title"></div>
        <div className="skeleton-location"></div>
        <div className="skeleton-price"></div>
        <div className="skeleton-rating"></div>
      </div>
    </div>
  );
};

export default ScalitonCard;