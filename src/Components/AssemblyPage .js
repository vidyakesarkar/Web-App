import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles/AssemblyPage.css'

// Define the parts available for assembly
const parts = [
  { id: 1, name: 'Plants', image: '/images/plant.png' },
  { id: 2, name: 'Flowers', image: '/images/flowers.png' },
  { id: 3, name: 'Trees', image: '/images/trees.png' },
  { id: 4, name: 'Grass', image: '/images/grass.png' },
  { id: 5, name: 'Garden Furniture', image: '/images/furniture.png' },
  { id: 6, name: 'Pathways', image: '/images/pathway.png' },
  { id: 7, name: 'Fences', image: '/images/fence.png' },
];

function AssemblyPage({ onNext, onBack, selectedParts }) {
  // State to track parts placed in the assembly area
  const [assembledParts, setAssembledParts] = useState([]);

  // Function to handle dropping a part in the assembly area
  const handleDrop = (item, monitor) => {
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    setAssembledParts((prev) => [
      ...prev,
      { ...item, left, top }
    ]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="assembly-page">
        <h2>Assemble Your Garden</h2>
        <div className="selected-parts-panel">
          {parts.filter(part => selectedParts.includes(part.id)).map(part => (
            <DraggablePart key={part.id} part={part} />
          ))}
        </div>
        <div className="assembly-area">
          {assembledParts.map((part, index) => (
            <DraggablePart key={index} part={part} isDropped={true} />
          ))}
          <DroppableArea onDrop={handleDrop} />
        </div>
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Finish</button>
      </div>
    </DndProvider>
  );
}

// Component for draggable parts
function DraggablePart({ part, isDropped }) {
  const [, drag] = useDrag({
    type: 'part',
    item: { ...part, left: 0, top: 0 },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="part"
      style={{ position: isDropped ? 'absolute' : 'relative', left: part.left, top: part.top }}
    >
      <img src={part.image} alt={part.name} />
      <p>{part.name}</p>
    </div>
  );
}

// Component for drop target area
function DroppableArea({ onDrop }) {
  const [, drop] = useDrop({
    accept: 'part',
    drop: (item, monitor) => {
      onDrop(item, monitor);
    },
  });

  return <div ref={drop} className="drop-area" />;
}

export default AssemblyPage;
