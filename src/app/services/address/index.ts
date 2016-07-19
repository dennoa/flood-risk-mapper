export class Address {
  gnaf_pid: string;
  full_address: string;
  locality: string;
  postcode: number;
  state: string;
  average_annual_damage: string;
  flood_frequency: string;
  longitude: number;
  latitude: number;
}

export class AddressSearchParams {
  gnaf_pid: string;
  full_address: string;
  locality: string;
  postcode: number;
  state: string;
  average_annual_damage: string;
  flood_frequency: string;
  skip: number;
  limit: number;
}