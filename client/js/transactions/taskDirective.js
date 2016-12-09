function TaskDetails($injector) {
    return {
        restrict: 'E',
        templateUrl: 'js/transactions/taskDetailsTemplate.html',
        controller: function ($state, $stateParams, taskService, $modal, $ionicModal, $scope) {
        	if (!$state.params.data) {
        		this.taskDetails = taskService.todos.find(task => task.id === $state.params.id);
        		if (!this.taskDetails) this.noTasks = true;
        	} else {
        		this.taskDetails = $state.params.data;
        	}
            this.statusToDo = function () {
                this.taskDetails.status = 'todo';
                console.log('todo');
            }
            this.statusInProgress = function () {
                this.taskDetails.status = 'in progress';
                console.log('in progress');
            }
            this.statusDone = function () {
                this.taskDetails.status = 'done';
                console.log('done');
            }

            $scope.task = this.taskDetails;

            var myModalForLog = $modal({title: "Title", templateUrl: "js/transactions/logWork.html", placement: 'center', show: false, backdrop: 'static', controller: 'TaskController', $scope: $scope});

              this.logWork = function () {
                myModalForLog.show();
              }

        },
        controllerAs: 'ctrl'
    };
}

angular
    .module('app')
    .directive('taskDetails', TaskDetails);