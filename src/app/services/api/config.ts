import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
import {Settings} from '../../settings';

@Injectable()
export class Config {
  apiUrl = 'http://flood-risk-api.app.skyops.io/';
  settings = Settings.getInstance();

  apiHeaders(): Headers {
    return new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-iag-api-key': this.settings.apiKey
    });
  }
}
