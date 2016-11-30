'use strict';
 
angular
	.module('app', ['ngAnimate', 
					'ionic', 
					'ui.router',
					'mgcrea.ngStrap', 
					'mgcrea.ngStrap.helpers.dateParser', 
					'mgcrea.ngStrap.tooltip'])
	.service('taskService', TaskService);

 var v = new UserView(TaskService().currentUser);