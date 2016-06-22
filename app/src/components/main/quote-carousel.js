angular.module('MainCtrl')
.directive('quoteCarousel', function(){
	return {
		replace: true,
		templateUrl: 'views/main/quote-carousel.html'
		controllerAs: 'QC',
		controller: function(){
			this.awards = [
				{title: "Google's OnHub sets a new standard in router design.", subTitle: "if world design guide"},
				{title: "Product of the Year (2016)", subTitle: "electronic house"},
				{title: "Outstanding design quality.", subTitle: "red dot"},
				{title: "this thing blasts Wi-Fi through your home like a firehouse on an anthill.", subTitle: "yahoo! tech"},
				{title: "The best wireless networking my home as ever seen.", subTitle: "wall street journal"},
				{title: "Coverage and throughput are shockingly good.", subTitle: "the verge"}
			]
		},
		link: function(scope,elem, attrs){
			
		}
	}
})