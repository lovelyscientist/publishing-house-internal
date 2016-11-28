angular
    .module('listApp')
    .controller('ListController', ListController);

ListController.$inject = ['$scope'];

function ListController ($scope) {
  $scope.todos = [
      {text: 'Pay for Sindis college for June', number: 1},
      {text: 'Book for dads birthday', number: 2},
      {text: 'Bananas and kiwi(10 items)', number: 3},
      {text: 'Warm shoes for winter', number: 4}
    ];

  $scope.lastTodo='';

  $scope.addItem = function (item) {
      $scope.todos.push({text: item, number: $scope.todos.length + 1});
      $scope.clearInput();
      console.log($scope.todos);
  };

  $scope.onEnter = function (keyEvent) {
    if (keyEvent.keyCode === 13) {
        $scope.addItem($scope.lastTodo);
    }
  };

  $scope.remove = function (item) {
      let index = $scope.todos.indexOf(item);

      $scope.todos.splice(index, 1);
  };

  $scope.clearInput = function () {
      $scope.lastTodo = '';
  };
}