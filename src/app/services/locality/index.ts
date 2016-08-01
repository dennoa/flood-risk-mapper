export class Locality {
  loc_pid: string;
  name: string;
  count_high_frequency: number;
}

export class LocalityPoint {
  loc_pid: string;
  longitude: number;
  latitude: number;
}

export class LocalitySearchParams {
  loc_pid: string;
}