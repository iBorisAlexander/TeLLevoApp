import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/maps/services';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements OnInit {

  constructor(private placesServices:PlacesService) { }

  ngOnInit() {}

}
