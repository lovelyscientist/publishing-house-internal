'use strict';
 
angular
	.module('app', ['ngAnimate', 
					'ionic', 
					'ui.router',
					'mgcrea.ngStrap', 
					'mgcrea.ngStrap.helpers.dateParser', 
					'mgcrea.ngStrap.tooltip'])
	.service('taskService', TaskService);

function TaskService() {
	this.taskCounter = 3;
	this.publicationCounter = 1;

	this.publications = [{id: 'RP-P-1', title: 'Hello, it is winter almost!'}];

	this.users = [
		{name: 'Vlad Sazonov', role: 'Editor'},
		{name: 'Svitlana Tyshchenko', role: 'Illustrator'},
		{name: 'Illya Tyshchenko', role: 'Translator'},
		{name: 'Alina Blahun', role: 'Author'},
		{name: 'Oksana Kurnosove',role: 'Manager'}
	];

	this.todos = [
      {id: 'RP-T-1', assignee: 'Vlad Sazonov', name: 'Create love story for two of us', remaining: '1d', estimated: '5d', publication: 'Love story of two'},
      {id: 'RP-T-2', assignee: 'Anastasuz Cherkashenko', name: 'Make us go for a walk', remaining: '10d', estimated: '20d', publication: 'Lets go for a walk'},
      {id: 'RP-T-3', assignee: 'Svitlana Tyshchenko', name: 'Is the best mom ever', remaining: '1d', estimated: '3d', publication: 'Hey, you are my best mom'}
    ];

    this.addTask = function (task) {
    	this.taskCounter++;
    	task.id = 'RP-T-' + this.taskCounter;
    	this.todos.push(task);
    }

    this.addPublication = function (publication) {
    	this.publicationCounter++;
    	task.id = 'RP-P' + this.publicationCounter;
    	this.publications.push(publication);
    }


}

 var v = new UserView();

dragula([document.querySelector('#left'), document.querySelector('#right')]);