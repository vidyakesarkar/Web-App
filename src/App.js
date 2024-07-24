import React, { useState } from 'react';
import DescriptionPage from './Components/DescriptionPage';
import PartsSelectionPage from './Components/PartsSelectionPage';
import AssemblyPage from './Components/AssemblyPage ';
import FinalViewPage from './Components/FinalViewPage ';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedParts, setSelectedParts] = useState([]);

  const goToNextPage = () => setCurrentPage(currentPage + 1);
  const goToPreviousPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="App">
      {currentPage === 1 && <DescriptionPage onNext={goToNextPage} />}
      {currentPage === 2 && (
        <PartsSelectionPage
          onNext={goToNextPage}
          onBack={goToPreviousPage}
          selectedParts={selectedParts}
          setSelectedParts={setSelectedParts}
        />
      )}
      {currentPage === 3 && (
        <AssemblyPage
          onNext={goToNextPage}
          onBack={goToPreviousPage}
          selectedParts={selectedParts}
        />
      )}
      {currentPage === 4 && <FinalViewPage assembledParts={selectedParts} />}
    </div>
  );
}

export default App;
