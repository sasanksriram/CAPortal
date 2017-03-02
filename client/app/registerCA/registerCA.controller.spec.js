'use strict';

describe('Controller: RegisterCACtrl', function () {

  // load the controller's module
  beforeEach(module('caPortalV1App'));

  var RegisterCACtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterCACtrl = $controller('RegisterCACtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
