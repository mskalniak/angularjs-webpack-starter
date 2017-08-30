import { <%= upModuleName %>Controller } from './<%= module %>-<%= name %>.controller';
import template from './<%= module %>-<%= name %>.component.html';
import './<%= module %>-<%= name %>.component.less';

export const <%= moduleName %>Component = {
  bindings: {},
  controller: <%= upModuleName %>Controller,
  template
};