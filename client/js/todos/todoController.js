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

  $scope.saveTask = function () {
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

       $scope.currentPub = {
        title: '',
        author: '',
        pages: 0,
        genre: ''
      };
  }

  $scope.savePub = function () {
      this.taskService.addPub($scope.currentPub);
    
       $scope.currentPub = {
        title: '',
        author: '',
        pages: 0,
        genre: ''
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

  $scope.saveTask = $scope.saveTask.bind(this);

  var myModalForNewTask = $modal({title: "Title", templateUrl: "js/transactions/addTask.html", placement: 'center', show: false, backdrop: 'static', controller: 'TaskController', $scope: $scope});
  var myModalForNewPublication = $modal({title: "Title", templateUrl: "js/transactions/addPub.html", placement: 'center', show: false, backdrop: 'static', controller: 'TaskController', $scope: $scope});

  $scope.addTask = function() {
        myModalForNewTask.show();
  };

  $scope.addPublication = function() {
        myModalForNewPublication.show();
  };
}