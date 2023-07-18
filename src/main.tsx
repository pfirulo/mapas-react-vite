import React from 'react';
import ReactDOM from 'react-dom/client';  
import { HomeScreen } from './screens';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de Geolocalicación.');
  throw new Error('Tu navegador no tiene opción de Geolocalicación.');
}
 
 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomeScreen/>
  </React.StrictMode>,
)
