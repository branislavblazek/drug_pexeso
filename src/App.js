import React, { useCallback, useState } from 'react';
import Intro from './components/Intro/Intro';
import GamePlace from './components/GamePlace/GamePlace';
import './App.css';

const PAGE_TYPES = ['intro', 'gameplace'];

const App = () => {
  const [page, setPage] = useState(PAGE_TYPES[0]);
  const closeIntro = useCallback(() => setPage(PAGE_TYPES[1]), []); 

  const renderContent = () => {
    if (page === PAGE_TYPES[1]) {
      return <GamePlace />
    } else {
      return <Intro onSubmit={closeIntro} />
    }
  }

  return (
    <div className="app">
      {renderContent()}
    </div>
  );
}

export default App;