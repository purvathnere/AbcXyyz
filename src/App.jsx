import React, { useState } from 'react';
import Background from './components/Background';
import Letter from './components/Letter';
import Success from './components/Success';
import './App.css';

export default function App() {
  const [appState, setAppState] = useState('apology'); // 'apology' | 'forgiven' | 'talk'

  const handleForgive = (choice) => {
    setAppState(choice); // 'forgiven' or 'talk'
  };

  return (
    <div className="app-viewport">
      {/* Decorative animated background particles */}
      <Background />

      {/* Main content area */}
      <main className="content-container">
        {appState === 'apology' ? (
          <Letter onForgive={handleForgive} />
        ) : (
          <Success mode={appState} />
        )}
      </main>
    </div>
  );
}
