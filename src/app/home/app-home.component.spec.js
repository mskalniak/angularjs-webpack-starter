import { mock } from 'angular';
import 'angular-mocks';
import { appHomeModule } from './app-home.module';

describe("appHomeComponent", function () {
  let $componentController; 
  let componentCtrl;

  beforeEach(() => {
    mock.module(appHomeModule.name);

    mock.inject(function (_$componentController_) {
      $componentController = _$componentController_;
    });

    componentCtrl = $componentController('appHomeComponent', null, {});
  });

  it('the component should exist', function () {
    expect(componentCtrl).toBeDefined(); 
  });
});