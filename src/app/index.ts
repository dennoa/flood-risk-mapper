/// src/app/index.ts
import {Component, OpaqueToken} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';

import '../style/app.scss';

import API_PROVIDERS from './services/api';
import routes from './routes';
import {Config} from './services/api/config';
import {Settings} from './settings';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS, API_PROVIDERS, Settings],
    directives: [ROUTER_DIRECTIVES],
    pipes: [],
    styles: [require('./style.scss')],
    template: require('./template.html')
})

@RouteConfig(routes)

export class App {
    apiUrl: string;

    constructor(config: Config) {
        this.apiUrl = config.apiUrl;
    }
}
