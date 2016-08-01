import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Requestor } from './requestor';
import { Address, AddressSearchParams } from '../address';
import { Geocode, GeocodeSearchParams } from '../geocode';
import { Locality, LocalityPoint, LocalitySearchParams } from '../locality';

@Injectable()
export class FloodRiskApi {
  constructor(private requestor: Requestor) {}

  searchGeocode(params: GeocodeSearchParams): Observable<Geocode[]> { return this.requestor.post('geocode/search', params); }

  searchAddressGeocode(params: GeocodeSearchParams): Observable<Address[]> { return this.requestor.post('address-flood-risk/geo-search', params); }

  searchAddress(params: AddressSearchParams): Observable<Address[]> { return this.requestor.post('address-flood-risk/search', params); }

  searchLocalityPoint(params: GeocodeSearchParams): Observable<LocalityPoint[]> { return this.requestor.post('locality-point/search', params); }

  searchLocality(params: LocalitySearchParams): Observable<Locality[]> { return this.requestor.post('locality-flood-risk/search', params); }
}

