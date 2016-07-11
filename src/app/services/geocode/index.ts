export class Geocode {
  address_detail_pid: string;
  geocode_type_code: string;
  longitude: number;
  latitude: number;
}

export class GeocodeSearchParams {
  longitude: number;
  latitude: number;
  max_distance: number;
  limit: number;
}
