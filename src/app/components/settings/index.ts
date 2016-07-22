import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Settings} from '../../settings';
import { FloodCodeDescriptionPipe } from '../../pipes/flood-code';

@Component({
  selector: 'settings',
  directives: [...FORM_DIRECTIVES],
  pipes: [FloodCodeDescriptionPipe],
  styles: [require('./style.scss')],
  template: require('./template.html')
})
export class SettingsForm {
  settings = Settings.getInstance();

  checkMaxDistance() {
    if (!this.settings.maxDistance || this.settings.maxDistance < 0) {
      this.settings.maxDistance = 0;
    };
    if (this.settings.maxDistance > 2000) {
      this.settings.maxDistance = 2000;
    };
  }

  checkLimit() {
    if (this.settings.limit < 1) {
      this.settings.limit = 1;
    };
    if (this.settings.limit > 50) {
      this.settings.limit = 50;
    };
  }
}
