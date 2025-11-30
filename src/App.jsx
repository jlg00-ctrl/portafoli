import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      <MainContent currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default App;