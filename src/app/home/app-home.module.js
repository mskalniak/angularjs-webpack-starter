import { module } from 'angular';
import uiRouter from 'angular-ui-router';
import { appHomeComponent } from './app-home.component';

export const appHomeModule = module('appHomeModule', [
  uiRouter
])
.component('appHomeComponent', appHomeComponent)
.name;