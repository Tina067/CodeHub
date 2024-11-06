import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content-wrapper">
        <Header className="header"/>
        <MainContent className="main-content"/>
      </div>
    </div>
  );
}

export default App;

