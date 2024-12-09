
import ReactDOM from 'react-dom/client';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Sidebar from './Sidebar.jsx'
import Dashboard from './Dashboard.jsx';
import Index from './index.jsx';

const rootElement = document.getElementById('root');

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render your React application
root.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>
);