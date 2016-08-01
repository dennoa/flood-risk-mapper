import {Home} from './components/home';
import {Summary} from './components/summary';
import {SettingsForm} from './components/settings';

export default [
    {path: '/', component: Home, name: 'Home'},
    {path: '/summary', component: Summary, name: 'Summary'},
    {path: '/settings', component: SettingsForm, name: 'Settings'},
    // Async load a component using Webpack's require with es6-promise-loader
    {path: '/about', loader: () => require('./components/about')('About'), name: 'About'}
];
