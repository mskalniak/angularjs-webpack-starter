import angular from 'angular'
import uiRouter from 'angular-ui-router'
import { routing } from './app.config'

// import { HomeController } from './home/home.controller'

import { appHomeModule } from './home/app-home.module';

angular.module('app', [uiRouter, appHomeModule])
    .config(routing);