import {Component} from '@angular/core';
import { Config } from '../../services/api/config';
import { FloodCode, FloodCodeDescriptionPipe, FloodCodeImgPipe } from '../../pipes/flood-code';

@Component({
    selector: 'about',
    template: require('./template.html'),
    styles: [require('./style.scss')],
    providers: [],
    directives: [],
    pipes: [FloodCodeDescriptionPipe, FloodCodeImgPipe]
})

export class About {
    apiUrl: string;
    floodCodes = FloodCode.all;

    constructor(config: Config) {
        this.apiUrl = config.apiUrl;
    }
}

