import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import { FloodCodeDescriptionPipe, FloodCodeImgPipe } from '../../pipes/flood-code';
import { FloodRiskApi } from '../../services/api/flood-risk-api';
import { Address } from '../../services/address';
import { GeocodeSearchParams } from '../../services/geocode';
import { Settings } from '../../settings';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, GOOGLE_MAPS_DIRECTIVES],
  pipes: [FloodCodeDescriptionPipe, FloodCodeImgPipe],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class Home implements OnInit {
  settings = Settings.getInstance();
  initialCoords = {
    lat: -27.467302692617668,
    lng: 153.02736282348633
  }; 
  coords = {
    lat: this.initialCoords.lat,
    lng: this.initialCoords.lng
  };
  addresses: Observable<Address[]>;

  constructor(private floodRiskApi: FloodRiskApi) {}

  setFloodRiskInfo(event) {
    this.coords = event.coords;
    this.searchGeocode();
  }

  ngOnInit() {
    this.searchGeocode();
  }

  private searchGeocode() {
    let params = new GeocodeSearchParams();
    params.latitude = this.coords.lat;
    params.longitude = this.coords.lng;
    params.max_distance = this.settings.maxDistance;
    params.limit = this.settings.limit;
    this.addresses = this.floodRiskApi.searchAddressGeocode(params);
  }
}
