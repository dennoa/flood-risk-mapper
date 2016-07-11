import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Settings} from '../../settings';

@Component({
  selector: 'settings',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})
export class SettingsForm {
  settings = Settings.getInstance();
}
