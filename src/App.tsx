// import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <main>
      <Header />
      <div className="rounded-2xl dashboard flex justify-between">
        <Dashboard />
      </div>
    </main>
  );
}

export default App;
