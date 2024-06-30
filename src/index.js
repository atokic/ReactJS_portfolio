import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import './index.css';
import App from './App';
import { SpeedInsights } from '@vercel/speed-insights/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <SpeedInsights />
    <App />
  </>
);

