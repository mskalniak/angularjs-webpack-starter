import { mock } from 'angular';
import 'angular-mocks';
import { <%= moduleName %>Module } from './<%= module %>-<%= name %>.module';

describe("<%= moduleName %>Component", function () {
  let $componentController; 
  let componentCtrl;

  beforeEach(() => {
    mock.module(<%= moduleName %>Module.name);

    mock.inject(function (_$componentController_) {
      $componentController = _$componentController_;
    });

    componentCtrl = $componentController('<%= moduleName %>Component', null, {});
  });

  it('the component should exist', function () {
    expect(componentCtrl).toBeDefined(); 
  });
});