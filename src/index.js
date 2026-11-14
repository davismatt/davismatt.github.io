import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ?ats switches on the single-column, ATS-friendly print layout
// (used at deploy time to generate Matthew-Davis-Resume-ATS.pdf).
if (new URLSearchParams(window.location.search).has('ats')) {
  document.documentElement.classList.add('ats')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
