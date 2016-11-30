function TaskDetails($injector) {
    return {
        restrict: 'E',
        templateUrl: 'js/transactions/taskDetailsTemplate.html',
        controller: function ($state, $stateParams, taskService) {
        	if (!$state.params.data) {
        		this.taskDetails = taskService.todos.find(task => task.id === $state.params.id);
        		if (!this.taskDetails) this.noTasks = true;
        	} else {
        		this.taskDetails = $state.params.data;
        	}
        },
        controllerAs: 'ctrl'
    };
}

angular
    .module('app')
    .directive('taskDetails', TaskDetails);