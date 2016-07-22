export class Coords {
  lat: number;
  lng: number;
}

export class MapState {
  static instance: MapState;
  coords: Coords;

  static getInstance(): MapState {
    if (!MapState.instance) {
      MapState.instance = MapState.withDefaults();
    }
    return MapState.instance;
  }

  private static withDefaults(): MapState {
    let state = new MapState();
    state.coords = { lat: -27.467302692617668, lng: 153.02736282348633 };
    return state;
  }

}
