angular.module('MainCtrl')
.directive('headerHero', function(){
	return {
		replace: true,
		templateUrl: 'views/main/header-hero.html'   
	};  
})