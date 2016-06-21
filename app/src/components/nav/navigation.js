angular.module('NavBar',['ngAnimate'])
.directive('navigationBar', function($animate){
	return {
		replace: true, 
		templateUrl: 'views/navigation/navigation.html', 
		controllerAs: 'navCtrl',
		controller: function($scope){
			var ctrl = this;
			ctrl.opened;

			ctrl.toggle = function(){
				ctrl.opened = !ctrl.opened;
			}

			ctrl.close = function(){
				console.log('click close')
			}
		},
		link: function(scope, elem, attrs){
			var mobile = elem.find('.mobile');
			var navBar = $('#navBar');
			var overlay = $('#mask-overlay');

			scope.$watch('navCtrl.opened', function(newVal, oldVal){
				if(newVal){
					$animate.addClass(mobile, 'show');
					navBar.addClass('opened');
					overlay.addClass('opened');
				}else {
					$animate.removeClass(mobile, 'show');
					overlay.removeClass('opened');
					navBar.removeClass('opened');
				}
			},true)

			// body scroll
			$(window).on('scroll', function(){
				navBar.addClass('white');
				if(window.scrollY === 0){
					navBar.removeClass('white');
				}
			})
		}
	};   
});