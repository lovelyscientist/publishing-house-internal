angular
	.module('listApp')
	.directive('todoItem', todoItem);

function todoItem () {
  return {
    restrict: 'E',
    templateUrl: 'js/todos/todoTemplate.html'
  }
}