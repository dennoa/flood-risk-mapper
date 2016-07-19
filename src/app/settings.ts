export class Settings {
  static instance: Settings;
  apiKey: string;
  maxDistance: number;
  limit: number;
  selectedFloodFrequency: string;

  static getInstance() {
    if (!Settings.instance) {
      Settings.instance = Settings.withDefaults();
    }
    return Settings.instance;
  }

  private static withDefaults(): Settings {
    let settings = new Settings();
    settings.maxDistance = 100;
    settings.limit = 3;
    settings.selectedFloodFrequency = 'H';
    settings.selectedAnnualDamage = 'H';
    return settings;
  }
}
