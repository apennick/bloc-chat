blocChat.config(function () {
  function config ($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
    });
    
    $stateProvider
      .state('state1', {
        url: '/state1',
        templateUrl:
      });
  }
  
  angular
    .module('blocChat', ['ui.router', firebase])
    .config(config);
})();