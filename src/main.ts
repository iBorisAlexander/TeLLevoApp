import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiaXdpaWR5eCIsImEiOiJjbDh3YTd4cTQwbHM1M3dzcmUyb29rY24wIn0.0k_yYJ_gDjFhdKDLQIlvCw';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
