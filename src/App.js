// src/components/App.js
import React, { useState } from 'react';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import './App.css';

const images = {
  home: 'https://images.pexels.com/photos/2972428/pexels-pixabay-235985.jpg',
  movies: 'https://images.pexels.com/photos/2972428/pexels-photo-2972428.jpeg',
  tvshows: 'https://images.pexels.com/photos/11741073/pexels-photo-11741073.jpeg',
  sports: 'https://images.pexels.com/photos/7618736/pexels-photo-7618736.jpeg',
  live: 'https://images.pexels.com/photos/6740101/pexels-photo-6740101.jpeg'
};

const App = () => {
  const [language, setLanguage] = useState('en');
  const [view, setView] = useState('home');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="app">
      <Menu language={language} setView={setView} setLanguage={handleLanguageChange} />
      <MainContent view={view} images={images} />
    </div>
  );
};

export default App;
