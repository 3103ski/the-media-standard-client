// --> React
import React from 'react';
import ReactDOM from 'react-dom/client';

// --> Project Imports
import App from './App.jsx';

// --> Component Imports
import './index.scss';
import 'semantic-ui-css/semantic.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
