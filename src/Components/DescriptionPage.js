import React from 'react';
import './DescriptionPage.css'; // Ensure correct path to CSS

function DescriptionPage({ onNext }) {
  return (
    <div className="description-page">
      <h1>Design Your Dream Garden</h1>
      <img src="/images/garden-full.png" alt="Garden" className="garden-image" />
      <p>Create a beautiful garden by selecting and arranging various elements.</p>
      <button onClick={onNext} className="start-button">START</button>
    </div>
  );
}

export default DescriptionPage;
