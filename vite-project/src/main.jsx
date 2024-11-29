import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// eslint-disable-next-line no-undef
createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line react/jsx-no-undef
  <StrictMode>
    <App />
  </StrictMode>
) 
