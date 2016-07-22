export class Settings {
  static instance: Settings;
  apiKey: string;
  maxDistance: number;
  limit: number;
  markOnMap: string;

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = Settings.withDefaults();
    }
    return Settings.instance;
  }

  private static withDefaults(): Settings {
    let settings = new Settings();
    settings.maxDistance = 100;
    settings.limit = 3;
    settings.markOnMap = 'flood_frequency';
    return settings;
  }
}
