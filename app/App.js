'use strict';

angular.module('myApp',['ui.router', 'MainCtrl', 'ngAnimate', 'NavBar']) 

.config(function($stateProvider, $urlRouterProvider, $locationProvider){ 
	$urlRouterProvider.otherwise('/');   

	$stateProvider
		.state('main', { 
			url: '/',
			templateUrl: '../views/main.html',
			controller: 'MainCtrl',
			controllerAs: 'MC' 
		}) 

    // GoogleBot SEO
    $locationProvider.html5Mode(true);
})

// Scroll to top on state change ==================================

.directive('scrollTopOnStateChange', function($rootScope){
  return {
    restict: 'A',
    link: function(scope, elem, attrs){
      // Scroll to top
      $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      })
    }
  }
})

// Animate on load
.directive('animateOnLoad', function($animate, $timeout){
  return {
    restrict: 'A',
    replace: false,
    scope: { 
      animateClass: '='
    },
    link: function(scope, elem, attrs){
      $timeout(function(){
        scope.$parent.showElem = true; // this elem already has a controller so we access the parent directive scope to show elem;
        $animate.addClass(elem, attrs.animateClass);
      });
    }
  }
})


