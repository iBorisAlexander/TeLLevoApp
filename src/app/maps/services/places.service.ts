import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation? : [number,number] ;

  get isUserLocationReady(): boolean{
    return !!this.useLocation;
  }

  constructor() {
    this.getUserLocation();
   }

  public async getUserLocation(): Promise<[number,number]>{
    return  new Promise (( resolve,rejact) => {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve (this.useLocation);
        },
        (err) => {
          alert('no se pudo obtener la geolocalizacion')
          console.log(err);
        }
      )
    })
  }

}
