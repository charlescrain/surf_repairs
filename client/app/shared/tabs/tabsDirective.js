var app = angular.module('app')
	.directive('tab',function(){
		return{
			restrict:'E',
			transclude:true,
			require:'^tabset',
			scope:{
				heading:'@'
			},
			template:'<div role="tabpanel" ng-show="active" ng-transclude></div>',
			link:function(scope,elem,attr, tabsetCtrl){
				scope.active = false;

				tabsetCtrl.addTab(scope);
			}
		}
	})
	.directive('tabset',function(){
		return {
			restrict:'E',
			transclude:true,
			scope: {},
			templateUrl:'app/shared/tabs/tabset.html',
			bindToController:true,
			controllerAs:'tabset',
			controller:function($scope, $state){
				var self = this;
				self.tabs=[];
				self.addTab = function(tab){
					if(self.tabs.length === 0){
						tab.active = true;
					}
					self.tabs.push(tab);
				};
				self.select = function(selectedTab){
					angular.forEach(self.tabs, function(tab){
						if(tab.active && tab !==selectedTab){
							tab.active = false;
						}
					})
					selectedTab.active=true;
					$state.go($scope.state);
				}
			},
			link:function(scope, elem, attrs) {
				scope.state = attrs.stateUrl;
				console.log(attrs);
			}
		}
	});