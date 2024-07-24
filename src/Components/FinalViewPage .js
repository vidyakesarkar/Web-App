import React from 'react';
import './FinalViewPage.css'; // Ensure correct path to CSS

const parts = [
  { id: 1, name: 'Plants', image: '/images/plant.png' },
  { id: 2, name: 'Flowers', image: '/images/flowers.png' },
  { id: 3, name: 'Trees', image: '/images/trees.png' },
  { id: 4, name: 'Grass', image: '/images/grass.png' },
  { id: 5, name: 'Garden Furniture', image: '/images/furniture.png' },
  { id: 6, name: 'Pathways', image: '/images/pathway.png' },
  { id: 7, name: 'Fences', image: '/images/fence.png' },
];

function FinalViewPage({ assembledParts }) {
  const assembledPartDetails = parts.filter(part => assembledParts.includes(part.id));

  return (
    <div className="final-view-page">
      <h2>Your Assembled Garden</h2>
      <div className="assembled-garden">
        {assembledPartDetails.map(part => (
          <div key={part.id} className="assembled-part">
            <img src={part.image} alt={part.name} className="assembled-image" />
            <p>{part.name}</p>
          </div>
        ))}
      </div>
      <p>Thank you for designing your garden!</p>
    </div>
  );
}

export default FinalViewPage;
