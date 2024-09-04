import React from 'react';
import { FaHome, FaFilm, FaTv, FaFutbol, FaBroadcastTower, FaCog } from 'react-icons/fa';
import './Menu.css';

const translations = {
  en: { 
    menu: 'Menu', 
    home: 'Home', 
    movies: 'Movies', 
    tvshows: 'TV Shows', 
    sports: 'Sports', 
    live: 'Live', 
    language: 'Language',
    languageOptions: {
      en: 'English',
      fr: 'French',
      de: 'German',
      ru: 'Russian',
      es: 'Spanish',
      zh: 'Chinese'
    }
  },
  fr: { 
    menu: 'Menu', 
    home: 'Accueil', 
    movies: 'Films', 
    tvshows: 'Séries', 
    sports: 'Sports', 
    live: 'Direct',
    language: 'Langue',
    languageOptions: {
      en: 'Anglais',
      fr: 'Français',
      de: 'Allemand',
      ru: 'Russe',
      es: 'Espagnol',
      zh: 'Chinois'
    }
  },
  de: { 
    menu: 'Menü', 
    home: 'Startseite', 
    movies: 'Filme', 
    tvshows: 'Fernsehshows', 
    sports: 'Sport', 
    live: 'Live',
    language: 'Sprache',
    languageOptions: {
      en: 'Englisch',
      fr: 'Französisch',
      de: 'Deutsch',
      ru: 'Russisch',
      es: 'Spanisch',
      zh: 'Chinesisch'
    }
  },
  ru: { 
    menu: 'Меню', 
    home: 'Домой', 
    movies: 'Фильмы', 
    tvshows: 'Телешоу', 
    sports: 'Спорт', 
    live: 'Прямой эфир',
    language: 'Язык',
    languageOptions: {
      en: 'Английский',
      fr: 'Французский',
      de: 'Немецкий',
      ru: 'Русский',
      es: 'Испанский',
      zh: 'Китайский'
    }
  },
  es: { 
    menu: 'Menú', 
    home: 'Inicio', 
    movies: 'Películas', 
    tvshows: 'Series', 
    sports: 'Deportes', 
    live: 'En vivo',
    language: 'Idioma',
    languageOptions: {
      en: 'Inglés',
      fr: 'Francés',
      de: 'Alemán',
      ru: 'Ruso',
      es: 'Español',
      zh: 'Chino'
    }
  },
  zh: { 
    menu: '菜单', 
    home: '首页', 
    movies: '电影', 
    tvshows: '电视节目', 
    sports: '体育', 
    live: '直播',
    language: '语言',
    languageOptions: {
      en: '英语',
      fr: '法语',
      de: '德语',
      ru: '俄语',
      es: '西班牙语',
      zh: '中文'
    }
  },
};

const Menu = ({ language, setView, setLanguage }) => {

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
  };

  return (
    <div className="menu">
      <h2 className="menu-heading">{translations[language].menu}</h2>
      <ul>
        <li onClick={() => setView('home')}><FaHome /> {translations[language].home}</li>
        <li onClick={() => setView('movies')}><FaFilm /> {translations[language].movies}</li>
        <li onClick={() => setView('tvshows')}><FaTv /> {translations[language].tvshows}</li>
        <li onClick={() => setView('sports')}><FaFutbol /> {translations[language].sports}</li>
        <li onClick={() => setView('live')}><FaBroadcastTower /> {translations[language].live}</li>
      </ul>
      <div className="settings">
        <FaCog className="settings-icon" />
        <label htmlFor="language-select">{translations[language].language}</label>
        <select id="language-select" onChange={handleLanguageChange} value={language}>
          {Object.entries(translations[language].languageOptions).map(([key, value]) => (
            <option key={key} value={key}>{value}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Menu;
