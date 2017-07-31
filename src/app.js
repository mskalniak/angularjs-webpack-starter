import angular from 'angular'
import uiRouter from 'angular-ui-router'
import appConfig from './app.config'

import HomeController from './home/home.controller'

angular.module('app', [uiRouter])
    .config(appConfig)
    .controller('HomeController', HomeController);