angular.module('MainCtrl')
.directive('quoteCarousel', function($timeout, $animate){
	return {
		replace: true,
		templateUrl: 'views/main/quote-carousel.html',
		controllerAs: 'QC',
		controller: function(){
			var QC = this;
			QC.test = "drew Peterson"
			QC.title;
			QC.subTitle;

			QC.awards = [
				{title: "Google's OnHub sets a new standard in router design.", subTitle: "if world design guide"},
				{title: "Product of the Year (2016)", subTitle: "electronic house"},
				{title: "Outstanding design quality.", subTitle: "red dot"},
				{title: "this thing blasts Wi-Fi through your home like a firehouse on an anthill.", subTitle: "yahoo! tech"},
				{title: "The best wireless networking my home as ever seen.", subTitle: "wall street journal"},
				{title: "Coverage and throughput are shockingly good.", subTitle: "the verge"}
			];

			QC.awardCo = ['A', 'B', 'C', 'D', 'E', 'F'];
		},
		link: function(scope,elem, attrs, QC){

			var max = QC.awards.length;
			var company = $('#quote-carousel .company');

			(function myLoop (i) { 
				if(i === max){ i = 0;}

				company.removeClass('selected');
				company[i].classList.add('selected');

				QC.title = QC.awards[i].title;
				QC.subTitle = QC.awards[i].subTitle;

				$timeout(function () {   
					if (++i) myLoop(i);   
				}, 4000)
			})(0); 


		

		}
	}
})