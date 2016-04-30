angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.quemSomos', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quemSomos.html',
        controller: 'quemSomosCtrl'
      }
    }
  })

  .state('menu.produto', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/produto.html',
        controller: 'produtoCtrl'
      }
    }
  })

  .state('redesSociais', {
    url: '/page6',
    templateUrl: 'templates/redesSociais.html',
    controller: 'redesSociaisCtrl'
  })

  .state('menu.contato', {
    url: '/Cloudtabajara',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});