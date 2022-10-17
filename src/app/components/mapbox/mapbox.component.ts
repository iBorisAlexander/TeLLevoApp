import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from 'src/app/maps/services';
import {Map} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
Mapboxgl.accessToken = 'pk.eyJ1IjoiaXdpaWR5eCIsImEiOiJjbDh3YTd4cTQwbHM1M3dzcmUyb29rY24wIn0.0k_yYJ_gDjFhdKDLQIlvCw';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(private placesServices:PlacesService) { }

  ngAfterViewInit(): void {
    if (!this.placesServices.useLocation) throw Error('No hay user Location')

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesServices.useLocation, // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
  }
}
