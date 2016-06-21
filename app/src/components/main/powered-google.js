angular.module('MainCtrl')
.directive('poweredGoogle', function(){
	return {
		replace: true,
		templateUrl: 'views/main/powered-google.html'   
	};  
})