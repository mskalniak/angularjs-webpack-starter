import { module } from 'angular';
import uiRouter from 'angular-ui-router';
import { <%= moduleName %>Component } from './<%= module %>-<%= name %>.component';

export const <%= moduleName %>Module = module('<%= moduleName %>Module', [
  uiRouter
])
.component('<%= moduleName %>Component', <%= moduleName %>Component)
.name;