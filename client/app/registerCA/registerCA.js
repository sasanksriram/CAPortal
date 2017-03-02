'use strict';

angular.module('caPortalV1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('registerCA', {
        url: '/registerCA',
        templateUrl: 'app/registerCA/registerCA.html',
        controller: 'RegisterCACtrl'
      });
  });