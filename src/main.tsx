import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoicGZpcnVsbyIsImEiOiJjbGs5MHYzMmQwazc1M2VxaDExNTRkdWZqIn0.pibLdjR0v52dIglCtm-0pQ';


if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de Geolocalicación.');
  throw new Error('Tu navegador no tiene opción de Geolocalicación.');
}



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
