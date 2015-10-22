var app = angular.module('app');
app.directive('job',['$http',function($http){
	return {
		restrict:'A',
		templateUrl:'app/shared/job/jobView.html',
		scope:{
			name:'@',
			completed:'@',
			dimensions:'='
		},
		controllerAs:'job',
		controller:function(){
			var self = this;
			self.name = "";
			self.completed = false;
			self.dimensions = "";
			$http.get('test_objects.json').then(function(result){
				var data = result.data;
				self.name= data.title;
				self.completed = data.completed;
				self.dimensions = data.boardDimensions;
			}, function(error){
				console.log(error);
			});
		},
		bindToController:true,
		link:function(scope, elem, attr){
			console.log('Sup');
		}
	};
}]);