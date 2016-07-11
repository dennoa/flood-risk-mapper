export class Settings {
  apiKey: string;
  maxDistance: number;
  limit: number;
  static instance: Settings;

  static getInstance() {
    if (!Settings.instance) {
      Settings.instance = Settings.withDefaults();
    }
    return Settings.instance;
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  private static withDefaults(): Settings {
    let settings = new Settings();
    settings.maxDistance = 100;
    settings.limit = 3;
    return settings;
  }
}