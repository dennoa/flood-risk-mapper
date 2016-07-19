import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Settings} from '../../settings';
import { FloodCode, FloodCodeDescriptionPipe } from '../../pipes/flood-code';

@Component({
  selector: 'settings',
  directives: [...FORM_DIRECTIVES],
  pipes: [FloodCodeDescriptionPipe],
  styles: [require('./style.scss')],
  template: require('./template.html')
})
export class SettingsForm {
  settings = Settings.getInstance();
  floodCodes = FloodCode.all;  
}
