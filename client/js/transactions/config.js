angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
		    .state('dashboard', {
		      url: '/dashboard',
		      templateUrl: 'js/transactions/addToShoppingList.html'
			})
			.state('list-transactions', {
		      url: '/list-transactions',
		      template: '<div ng-app="myApp" style="margin-left:5px;margin-top:10px" ng-controller="GridController"><grid conf="config"></grid></div>'
			})
	});