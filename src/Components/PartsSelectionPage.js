import React from 'react';
import './PartSelection.css'; // Ensure correct path to CSS

const parts = [
  { id: 1, name: 'Plants', image: '/images/plant.png' },
  { id: 2, name: 'Flowers', image: '/images/flowers.png' },
  { id: 3, name: 'Trees', image: '/images/trees.png' },
  { id: 4, name: 'Grass', image: '/images/grass.png' },
  { id: 5, name: 'Garden Furniture', image: '/images/furniture.png' },
  { id: 6, name: 'Pathways', image: '/images/pathway.png' },
  { id: 7, name: 'Fences', image: '/images/fence.png' },
];

function PartsSelectionPage({ onNext, onBack, selectedParts, setSelectedParts }) {
  const togglePartSelection = (id) => {
    if (selectedParts.includes(id)) {
      setSelectedParts(selectedParts.filter(partId => partId !== id));
    } else {
      setSelectedParts([...selectedParts, id]);
    }
  };

  return (
    <div className="parts-selection-page">
      <h2>Select Garden Elements</h2>
      <div className="parts-list">
        {parts.map(part => (
          <div
            key={part.id}
            className={`part-card ${selectedParts.includes(part.id) ? 'selected' : ''}`}
            onClick={() => togglePartSelection(part.id)}
          >
            <img src={part.image} alt={part.name} />
            <p>{part.name}</p>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default PartsSelectionPage;
