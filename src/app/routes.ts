import {Home} from './components/home'; 
import {SettingsForm} from './components/settings';

export default [
    {path: '/', component: Home, name: 'Home'},
    // Async load a component using Webpack's require with es6-promise-loader
    {path: '/about', loader: () => require('./components/about')('About'), name: 'About'},
    {path: '/settings', component: SettingsForm, name: 'Settings'}
];
