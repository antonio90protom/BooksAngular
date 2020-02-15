import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public lat = 40.859126;
  public lng = 14.169056;
  isHidden=true;
  
  constructor() {
    
  }

  //private setCurrentPosition() {
  //  if ('geolocation' in navigator) {
     // navigator.geolocation.getCurrentPosition((p) => {
     //    this.lat;
    //    this.lng;
     //  });
  //   }
  // }

  ngOnInit() {
 //  this.setCurrentPosition();
  }

}
