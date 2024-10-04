import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Projects from './components/Projects'; // Não remova isso
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router basename="/Portfolio">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  </StrictMode>,
);
