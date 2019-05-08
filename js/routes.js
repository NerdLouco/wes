angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/start',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('page', {
    url: '/page2',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('page2', {
    url: '/page3',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/page8',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page4', {
    url: '/page10',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('wiseEnergySaving', {
    url: '/page11',
    templateUrl: 'templates/wiseEnergySaving.html',
    controller: 'wiseEnergySavingCtrl'
  })

$urlRouterProvider.otherwise('/start')


});