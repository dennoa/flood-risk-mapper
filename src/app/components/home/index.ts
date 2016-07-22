import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { FloodCodeDescriptionPipe, FloodCodeImgPipe, FloodCodeMarkerPipe } from '../../pipes/flood-code';
import { FloodRiskApi } from '../../services/api/flood-risk-api';
import { Address, AddressSearchParams } from '../../services/address';
import { GeocodeSearchParams } from '../../services/geocode';
import { Settings } from '../../settings';
import { MapState } from './map-state';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, GOOGLE_MAPS_DIRECTIVES],
  pipes: [FloodCodeDescriptionPipe, FloodCodeImgPipe, FloodCodeMarkerPipe],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class Home implements OnInit {
  settings = Settings.getInstance();
  mapState = MapState.getInstance();
  initialCoords = this.mapState.coords; 
  addresses: Observable<Address[]>;
  isSearching: boolean;

  constructor(private floodRiskApi: FloodRiskApi) {}

  setFloodRiskInfo(event) {
    this.mapState.coords = event.coords;
    this.searchGeocode();
  }

  ngOnInit() {
    this.searchGeocode();
  }

  private searchGeocode() {
    this.isSearching = true;
    let params = new GeocodeSearchParams();
    params.latitude = this.mapState.coords.lat;
    params.longitude = this.mapState.coords.lng;
    params.max_distance = this.settings.maxDistance;
    params.limit = this.settings.limit;
    this.addresses = this.floodRiskApi.searchAddressGeocode(params);
    this.addresses.subscribe(addresses=> {
      this.isSearching = false;
    });
  }

}
