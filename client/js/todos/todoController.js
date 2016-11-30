angular
    .module('app')
    .controller('TaskController', TaskController);

TaskController.$inject = ['$scope', '$modal', '$ionicModal', 'taskService'];

function TaskController ($scope, $modal, $ionicModal, taskService) {
  this.taskService = taskService;
  $scope.taskService = taskService;

    $scope.currentTask = {
      name: '',
      estimated: '',
      remaining: '',
      assignee: '',
      publication: ''
    };

  $scope.addTask = function () {
      this.taskService.addTask($scope.currentTask);
      $scope.currentTask = {
        name: '',
        estimated: '',
        remaining: '',
        assignee: '',
        publication: ''
      };
  }

  $scope.addTask = $scope.addTask.bind(this);

  var myModal = $modal({title: "Title", templateUrl: "js/transactions/addTransactionV2.html", placement: 'center', show: false, backdrop: 'static', controller: 'TaskController', $scope: $scope});

  $scope.showModal = function() {
        myModal.show();
  };
}