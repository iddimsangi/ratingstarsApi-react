import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRatings={10} />
  </React.StrictMode>
);

