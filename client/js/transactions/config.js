angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
		    .state('dashboard', {
		       url: '/dashboard',
		       template: '<dashboard></dashboard>'
			})
			.state('task', {
		        url: '/tasks/:id',
		        template: '<div>task view</div>'
		    })
			.state('publications', {
		      url: '/publications',
		      template: '<div ng-app="myApp" style="margin-left:5px;margin-top:10px" ng-controller="GridController"><grid conf="config"></grid></div>'
			})
	});