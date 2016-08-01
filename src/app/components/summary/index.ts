import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { FloodCodeDescriptionPipe, FloodCodeImgPipe, FloodCodeMarkerPipe } from '../../pipes/flood-code';
import { FloodRiskApi } from '../../services/api/flood-risk-api';
import { Locality } from '../../services/locality';
import { GeocodeSearchParams } from '../../services/geocode';
import { Settings } from '../../settings';
import { MapState } from '../../services/map-state';

@Component({
  selector: 'summary',
  directives: [...FORM_DIRECTIVES, GOOGLE_MAPS_DIRECTIVES],
  pipes: [FloodCodeDescriptionPipe, FloodCodeImgPipe, FloodCodeMarkerPipe],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class Summary implements OnInit {
  settings = Settings.getInstance();
  mapState = MapState.getInstance();
  initialCoords = this.mapState.coords;
  localities: Observable<Locality[]>;
  isSearching: boolean;
  floodCodes = [
    ['L', 'count_low_frequency', 'count_low_aad'],
    ['M', 'count_medium_frequency', 'count_medium_aad'],
    ['H', 'count_high_frequency', 'count_high_aad']
  ];

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
    params.max_distance = 2000000;
    params.limit = 1;
    this.floodRiskApi.searchLocalityPoint(params).subscribe(points => {
      if (points.length > 0) {
        return this.searchLocality(points[0]);
      }
      this.localities = Observable.create(obs => {
        obs.next([{ name: 'No data found' }]);
        obs.complete();
      });
      this.isSearching = false;
    });
  }

  private searchLocality(point) {
    this.mapState.coords.lat = point.latitude;
    this.mapState.coords.lng = point.longitude;
    this.localities = this.floodRiskApi.searchLocality({ loc_pid: point.loc_pid });
    this.localities.subscribe(() => {
      this.isSearching = false;
    });
  }

}
