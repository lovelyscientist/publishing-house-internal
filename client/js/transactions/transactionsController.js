angular
    .module('app')
    .controller('ListController', ListController);

ListController.$inject = ['$scope', '$modal', '$ionicModal', '$filter', 'transactionsStore'];

function ListController ($scope, $modal,$ionicModal, $filter, transactionsStore) {
  $scope.todos = [{text: 'make todo on angular', number: 1}];
  $scope.lastTodo='';

  $scope.initDragula = function () {
      dragula([document.getElementById('#left'), document.getElementById('#right')]);
      console.log(document.getElementById('#left'));
  };

  $scope.addItem = function (item) {
      $scope.todos.push({text: item, number: $scope.todos.length + 1});
      $scope.clearInput();
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

   var myModal = $modal({title: "Title", templateUrl: "js/transactions/addTransactionV2.html", placement: 'center', show: false, backdrop: 'static', controller: 'ListController', $scope: $scope});

  $scope.showModal = function() {
        myModal.show();
  };
  
  $scope.currentTransaction = {
    date: '',
    amount: '',
    type: "Food"
  }

  $scope.addTransaction = function () {
      $scope.currentTransaction.amount = parseFloat($scope.currentTransaction.amount);
      transactionsStore.transactions.push($scope.currentTransaction);
  }
}