var app = angular.module('app');
app.directive('picture',['$http',function($http){
	return {
		restrict:'E',
		templateUrl:'app/shared/picture/pictureView.html',
		scope:{},
		controllerAs:'picture',
		controller:function($scope){
			console.log($scope.edit);
		},
		link:function(scope, elem, attr){
			scope.image = attr.url;
			console.log(scope);
		}
	};
}]);