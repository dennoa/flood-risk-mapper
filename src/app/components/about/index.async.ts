import {Component} from '@angular/core';
import { Config } from '../../services/api/config';
import { FloodCodeDescriptionPipe, FloodCodeImgPipe } from '../../pipes/flood-code';

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
    riskCodes = ['N', 'L', 'M', 'H'];

    constructor(config: Config) {
        this.apiUrl = config.apiUrl;
    }

}

