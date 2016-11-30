angular
    .module('app')
    .controller('TaskController', TaskController);

TaskController.$inject = ['$scope', '$modal', '$ionicModal', 'taskService'];

function TaskController ($scope, $modal, $ionicModal, taskService) {
  this.taskService = taskService;
  $scope.taskService = taskService;
  this.tasks = this.taskService.getTodos();
  this.todoTasks = this.tasks.filter((task) => task.status === 'todo');
  this.inProgressTasks = this.tasks.filter((task) => task.status === 'in-progress');
  this.doneTasks = this.tasks.filter((task) => task.status === 'done');

    $scope.currentTask = {
      name: '',
      estimated: '',
      remaining: '',
      assignee: '',
      publication: ''
    };

  $scope.addTask = function () {
      this.taskService.addTask($scope.currentTask);
      this.tasks = this.taskService.getTodos();
     
      this.todoTasks = this.tasks.filter((task) => task.status === 'todo');
      this.inProgressTasks = this.tasks.filter((task) => task.status === 'in-progress');
      this.doneTasks = this.tasks.filter((task) => task.status === 'done');
      
      $scope.currentTask = {
        name: '',
        estimated: '',
        remaining: '',
        assignee: '',
        publication: ''
      };
  }

  this.showMyTasks = function () {
      if (this.checked) {
            this.tasks = this.taskService.getTodos('my');
            this.todoTasks = this.tasks.filter((task) => task.status === 'todo');
            this.inProgressTasks = this.tasks.filter((task) => task.status === 'in-progress');
            this.doneTasks = this.tasks.filter((task) => task.status === 'done');
      } else {
            this.tasks = this.taskService.getTodos();
            this.todoTasks = this.tasks.filter((task) => task.status === 'todo');
            this.inProgressTasks = this.tasks.filter((task) => task.status === 'in-progress');
            this.doneTasks = this.tasks.filter((task) => task.status === 'done');
      }
     
  };

  $scope.addTask = $scope.addTask.bind(this);

  var myModal = $modal({title: "Title", templateUrl: "js/transactions/addTransactionV2.html", placement: 'center', show: false, backdrop: 'static', controller: 'TaskController', $scope: $scope});

  $scope.showModal = function() {
        myModal.show();
  };
}