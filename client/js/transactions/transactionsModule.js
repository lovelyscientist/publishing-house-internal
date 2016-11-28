'use strict';
 
angular
	.module('app', ['myApp',
					'ngAnimate', 
					'ionic', 
					'ui.router',
					'mgcrea.ngStrap', 
					'mgcrea.ngStrap.helpers.dateParser', 
					'mgcrea.ngStrap.tooltip', 
					'listApp']);

 var v = new UserView();

dragula([document.querySelector('#left'), document.querySelector('#right')]);